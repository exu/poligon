<?php
/**
 * Site watcher
 *
 * @package   package
 * @author    Jacek Wysocki <jacek.wysocki@gmail.com>
 * @copyright Copyright (c) 2012 copyright
 */

/**
 * Site watcher
 *
 * description
 *
 * @package package
 * @author  Jacek Wysocki <jacek.wysocki@gmail.com>
 * @copyright Copyright (c) 2012 copyright
 */
class SiteWatcher
{
    protected $sites = array(
                             'qarson' => 'http://www.qarson.fr',
                             'crm' => 'http://crm.pl.edp',
                             );


    public function __construct($options=array())
    {
        if (is_array($options)) {
            foreach ($options as $k => $v) {
                $this->$k = $v;
            }
        }

    }


    /**
     * @author Jacek Wysocki <jacek.wysocki@gmail.com>
     */
    protected function getStatus($url)
    {
        $http = curl_init();
        $opts = array(CURLOPT_RETURNTRANSFER => true, // do not output to browser
                      CURLOPT_URL => $url,            // set URL
                      CURLOPT_NOBODY => true,         // do a HEAD request only
                      CURLOPT_TIMEOUT => 30);   // set timeout
        curl_setopt_array($http, $opts);
        $result = curl_exec($http);
        return (int) curl_getinfo($http, CURLINFO_HTTP_CODE);
    }



    /**
     * @author Jacek Wysocki <jacek.wysocki@gmail.com>
     */
    public function run()
    {
        foreach ($this->sites as $name => $url) {
            if ($this->getStatus($url) >= 300) {

            }
        }

    }

}

$app = new App;
$app->run();
