<?php

require __DIR__ . '/vendor/autoload.php';

require 'Doors.php';
require 'Car.php';

require 'container.php';


$car = $container->get('car');

echo "\n\n" . print_r($car, 1);
