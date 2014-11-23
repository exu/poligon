<?php

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

$container = new ContainerBuilder();

$container->setParameter('doors.count', 5);

$container->register('door', 'Doors')
    ->addArgument('%doors.count%');

$container->register('car', 'Car')
          ->addArgument(new Reference('door'));
