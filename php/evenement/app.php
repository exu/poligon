<?php

require 'vendor/autoload.php';

$emitter = new Evenement\EventEmitter();

class Logger
{
    public function log($message)
    {
        print($message . "\n");
    }
}

$logger = new Logger;

$emitter->on('user.created', function ($user, $password = null) use ($logger) {
    $logger->log(sprintf("User '%s' was created %s.", $user, $password));
});

$emitter->emit('user.created', ['lalala']);
$emitter->emit('user.created', ['lalala']);
$emitter->emit('user.created', ['lalala', 'trilililii']);
$emitter->emit('user.created', ['lalala']);
$emitter->emit('user.created', ['lalala']);
$emitter->emit('user.created', ['lalala', 'trololololo']);
