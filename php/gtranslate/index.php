<?php

function replace_unicode_escape_sequence($match) {
return mb_convert_encoding(pack("H*", $match[1]), "UTF-8", "UCS-2BE");
}

$query  = trim($argv[0]);
$query  = urlencode($query);

$ch     = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://www.google.com/uds/Gtranslate?callback=google.language.callbacks.id100&langpair=id%7Cen&key=notsupplied&v=1.0&context=22&q=$query");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$contents = curl_exec ($ch);

curl_close ($ch);

$str = preg_replace_callback("/\\\\u([0-9a-f]{4})/i", "replace_unicode_escape_sequence", $contents);

echo substr($str, 57, -19);

?>
