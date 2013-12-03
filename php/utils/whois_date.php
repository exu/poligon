<?php
$domains = array('home.pl', 'galecki.org');

function creation_date($domain) {
    $lines = explode("\n", `whois $domain`);
    foreach($lines as $line) {
        if(strpos(strtolower($line), 'created') !== false) {
            return $line;
        }
    }

    return false;
}

foreach($domains as $d) {
    echo creation_date($d) . "\n";
}
