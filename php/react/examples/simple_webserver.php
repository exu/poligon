<?php
session_start();

if (!isset($_SESSION['count'])) $_SESSION['count'] = 0;
$_SESSION['count']++;

$count = $_SESSION['count'];
switch($count) {
case 1:
    $message = "Hohhoo";
    break;
case 2:
    $message = "Hioh";
    break;
case 3:
    $message = "HOhoKKK";
    break;
default:
    $message = "I've reached " . $count . " level";
}

echo json_encode(["Count" => $count, "Message" => $message]);
