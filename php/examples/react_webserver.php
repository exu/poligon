<?php
require 'vendor/autoload.php';

$app = function ($request, $response) {
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

    $data = json_encode(["Count" => $count, "Message" => $message]);

    $response->writeHead(200, array('Content-Type' => 'application/json'));
    $response->end($data);
    unset($data);
};

gc_enable();

$loop = React\EventLoop\Factory::create();
$socket = new React\Socket\Server($loop);
$http = new React\Http\Server($socket, $loop);

$http->on('request', $app);
echo "Server running at http://0.0.0.0:1337\n";
$socket->listen(1337);
$loop->run();