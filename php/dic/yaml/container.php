<?php

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\Config\FileLocator;

$container = new ContainerBuilder();

$loader = new YamlFileLoader($container, new FileLocator(__DIR__));
$loader->load('container.yml');
