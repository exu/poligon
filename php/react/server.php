<?php
require 'vendor/autoload.php';

const RESPONSE_SIZE = 20;  // in megabytes

$app = function ($request, $response) {
    $data = str_repeat(chr(rand(32, 126)), RESPONSE_SIZE * 1024 * 1024);

    print sprintf(
        "Allocated memory usage: %s, Memory Limit: %d, PID: %d\n",
        number_format(memory_get_usage()),
        ini_get("memory_limit"),
        getmypid()
    );

    $response->writeHead(200, array('Content-Type' => 'application/json'));
    $response->end($data);

    unset($data);
};
