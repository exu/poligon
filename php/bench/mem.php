<?php
$GLOBALS["timer"] = microtime(true);

function t() {
    echo 1000 * (microtime(true) - $GLOBALS["timer"]);
    $GLOBALS["timer"] = microtime(true);
}

function m() {
    echo number_format(memory_get_usage(true)/1048576, 2)."\t";
}

ini_set('memory_limit', '1024M');

$a = '';
for ($i=0; $i<1000000; $i++) {
  $a .= '1';
}
m();t();
// 1.75 M (64bit), 1.25 M (32bit)


$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[$i] = true;
}
m();t();
// 199.75 M (64bit), 80.75 M (32bit)

$a = new stdclass;
for ($i=0; $i<1000000; $i++) {
  $a->$i = true;
}
m();t();
// 207.50 M (64bit), 88.50 M (32bit)

$a = new SplFixedArray(1000000);
for ($i=0; $i<1000000; $i++) {
  $a[$i] = true;
}
m();t();
// 84.75 M (64bit), 34.75 M (32bit)


$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[$i] = $i;
}
m();t();
// 199.75 M (64bit), 80.75 M (32bit)

$a = new stdclass;
for ($i=0; $i<1000000; $i++) {
  $a->$i = $i;
}
m();t();
// 207.50 M (64bit), 88.50 M (32bit)

$a = new SplFixedArray(1000000);
for ($i=0; $i<1000000; $i++) {
  $a[$i] = $i;
}
m();t();
// 84.75 M (64bit), 34,75 M (32bit)


$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[$i] = (string)$i;
}
m();t();
// 322.00 M (64bit), 164.75 M (32bit)

$a = new stdclass();
for ($i=0; $i<1000000; $i++) {
  $a->$i = (string)$i;
}
m();t();
// 329.50 M (64bit), 172.50 M (32bit)

$a = new SplFixedArray(1000000);
for ($i=0; $i<1000000; $i++) {
  $a[$i] = (string)$i;
}
m();t();
// 207.00 M (64bit), 118.75 M (32bit)


$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[(string)$i] = (string)$i;
}
m();t();
// 321.75 M (64bit), 164.75 M (32bit)


$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[$i] = "";
}
m();t();
// 253.25 M (64bit), 96.00 M (32bit)

$a = new stdclass;
for ($i=0; $i<1000000; $i++) {
  $a->$i = "";
}
m();t();
// 261.00 M (64bit), 103.75 M (32bit)

$a = new SplFixedArray(1000000);
for ($i=0; $i<1000000; $i++) {
  $a[$i] = "";
}
m();t();
// 138.50 M (64bit), 50.25 M (32bit)



$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[$i] = "hello";
}
m();t();
// 253.25 M (64bit), 96.00 M (32bit)

$a = new stdclass;
for ($i=0; $i<1000000; $i++) {
  $a->$i = "hello";
}
m();t();
// 261.00 M (64bit), 103.75 M (32bit)

$a = new SplFixedArray(1000000);
for ($i=0; $i<1000000; $i++) {
  $a[$i] = "hello";
}
m();t();
// 138.50 M (64bit), 50.25 M (32bit)


$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[$i] = array();
}
m();t();
// 421.25 M (64bit), 126.50 M (32bit)

$a = new stdclass;
for ($i=0; $i<1000000; $i++) {
  $a->$i = array();
}
m();t();
// 428.75 M (64bit), 134.25 M (32bit)

$a = new SplFixedArray(1000000);
for ($i=0; $i<1000000; $i++) {
  $a[$i] = array();
}
m();t();
// 306.25 M (64bit), 50.75 M (32bit)


$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[$i] = array("");
}
m();t();
// 665.25 M (64bit), 256.25 M (32bit)

$a = new stdclass;
for ($i=0; $i<1000000; $i++) {
  $a->$i = array("");
}
m();t();
// 673.00 M (64bit), 264.00 M (32bit)

$a = new SplFixedArray(1000000);
for ($i=0; $i<1000000; $i++) {
  $a[$i] = array("");
}
m();t();
// 550.50 M (64bit), 210.50 M (32bit)


$a = array();
for ($i=0; $i<1000000; $i++) {
  $a[$i] = array("hello");
}
m();t();
// 665.25 M (64bit), 256.25 M (32bit)

$a = new stdclass;
for ($i=0; $i<1000000; $i++) {
  $a->$i = array("hello");
}
m();t();
// 673.00 M (64bit), 264.00 M (32bit)

$a = new SplFixedArray(1000000);
for ($i=0; $i<1000000; $i++) {
  $a[$i] = array("hello");
}
m();t();
