<?php
namespace {

    require 'vendor/autoload.php';

    use Symfony\Component\Config\FileLocator;
    use Symfony\Component\Yaml\Yaml;

    class YamlUserLoader extends FileLoader
    {
        public function load($resource, $type = null)
        {
            $configValues = Yaml::parse($resource);
            print_r($configValues);


            // ... handle the config values

            // maybe import some other resource:

            // $this->import('extra_users.yml');
        }

        public function supports($resource, $type = null)
        {
            return is_string($resource) && 'yml' === pathinfo(
                $resource,
                PATHINFO_EXTENSION
            );
        }
    }

    $configDirs = ['config1', 'config2'];
    $locator = new FileLocator($configDirs);
    $yamlUserFiles = $locator->locate('users.yml', null, false);

    print_r($yamlUserFiles);

    $yamlResourcesFiles = $locator->locate('resources.yml', null, false);
    print_r($yamlResourcesFiles);

}
