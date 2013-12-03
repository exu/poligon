<?php

$testSizes = array(128,256,120,10,15,600,800,1200);

function findBest($size) {
    $sizes = array(64,128,240,420,640,800);

    foreach($sizes as $baseSize) {
        if($size <= $baseSize) {
            return $baseSize;
        }
    }

    return $sizes[count($sizes)-1];
}


foreach($testSizes as $s) {
    echo findBest($s); echo "\n";
}
