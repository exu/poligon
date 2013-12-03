<?php

use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;
use Ratchet\Session\SessionProvider;
use Symfony\Component\HttpFoundation\Session\Storage\Handler;
use DE\Chat;

require dirname(__DIR__) . '/vendor/autoload.php';

$session = new SessionProvider(
    new Chat(),
    new Handler\NativeSessionHandler()
);

$server = IoServer::factory(
    new WsServer($session),
    8080
);

$server->run();