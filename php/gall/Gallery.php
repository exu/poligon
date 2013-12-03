#!/usr/bin/env php
<?php

/**
 * Class Gallery
 * @author Jacek Wysocki <jacek.wysocki@gmail.com>
 */
class Gallery
{
    public $sourcePath = './';
    public $imagesPath = 'gallery/';
    public $imageSizes = array(
        'micro' => array(32),
        'thumb' => array(64),
        'small' => array(128),
        'medium' => array(256),
        'medium-big' => array(320),
        'big' => array(640),
        'huge' => array(800),
    );
    public $clearSourceGallery = true;
    public $pictureTemplate = '<a href="{big}"><img src="{thumb}" alt="{comment}"></a>';
    public $publicPrefix = '/gallery/';
    public $noConvert = false;
    public $options = array(
            'sourcePath::' => 'Source images path',
            'imagesPath::' => 'Output gallery path',
            'counterStart::' => 'Images names starts from this number',
            'clearSourceGallery:' => 'Clear source gallery images',
            'publicPrefix:' => 'public URL prefix',
            'noConvert::' => 'disable conversion - generate HTML only',
    );

    public $counterStart = 1;

    public function __construct($options=array())
    {
        $options = array_merge($options, getopt('n', array_keys($this->options)));

        if(isset($options['n'])) {
            $this->noConvert = true;
        }

        foreach($options as $k=>$v) {
            $this->$k = $v;
        }

        foreach($this->imageSizes as $size) {
            $imagePath = $this->imagesPath . $size[0];
            if(!file_exists($imagePath)) {
                echo "Creating $imagePath\n";
                `mkdir -p $imagePath && chmod a+w $imagePath`;
            }
        }
    }


    public function clearGallery()
    {
        if(!$this->clearSourceGallery) return;

        foreach($this->imageSizes as $size) {
            $imagePath = $this->imagesPath . '/' . $size[0] . '/*';
            `rm -rf $imagePath`;
        }
    }


    public function generate($options = array())
    {
        $this->clearGallery();



        echo "\n\n Usage \n\n";
        foreach($this->options as $option  => $description) {
            echo "Use --" . str_replace(':', '', $option) . "=VALUE to " . $description . "\n";
        }

        $gallery = array();
        $i = $this->counterStart;
        $j = 0;

        $imagesDirectory = glob($this->sourcePath . "*.jpg");
        $count = count($imagesDirectory) * count($this->imageSizes);

        echo "\n\nStarting image conversion process\n\n";
        foreach ($imagesDirectory as $filename) {
            $name = $i++.".jpg";
            echo $name . "\n";
            foreach($this->imageSizes as $s => $size) {
                echo "Converting ($size[0]) " . $j++ . " from $count                  \r";
                $imagePath = $this->imagesPath . $size[0] . '/' . $name;

                if(!$this->noConvert) {
                    $cmd = "convert -resize {$size[0]}x{$size[0]} '$filename' '$imagePath'";
                    `$cmd`;
                }
            }

            $gallery[$this->publicPrefix . $this->imageSizes['thumb'][0] . '/'. $name] = $this->publicPrefix . $this->imageSizes['big'][0] . '/' . $name;
        }


        $html = '';
        $i = $this->counterStart;
        foreach($gallery as $thumb => $big) {
            $html .= strtr($this->pictureTemplate, array(
                '{thumb}' => $thumb,
                '{big}' => $big,
                '{comment}' => 'Image ' . $i++,
            ))."\n";

        }

        return $html;
    }

}


$Gallery = new Gallery();
echo $Gallery->generate(array('no_convert' => false));
