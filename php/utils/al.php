<?php


$s = preg_split('//', "Dziękuję ale nie skorzystam, ale pomysł aby przyciągnąć uwagę ciekawy", -1, PREG_SPLIT_NO_EMPTY);

foreach($s as $l) {
    echo "0x".dechex(ord($l))." ";
}

echo "\n============\n";

preg_match_all('/(0x[a-f0-9]{2})+/', file_get_contents('http://allegro.pl'), $m);foreach($m[0] as $h) { echo  chr(hexdec($h)) ;}