<?php

$a = new ArrayObject();
echo is_Array($a);

die;
class  qUserProfiler {

    public static $instance;


 public static function getQUserProfiler() {

        if (!isset(self::$instance)) {
            $c = __CLASS__;
            self::$instance = new $c;
            self::$instance->initialize();
        }

                return self::$instance;
            }

    function initialize() {}


}



    function &f() 
    {
        static $instance;

        if (!is_object($instance)) {
            echo "ahdjshjkdfhjkashfjksdhkfh";
            $instance = qUserProfiler::getQUserProfiler();
            return $instance;
        }

        return $instance;
    }

$a = f();
echo '<pre>' . var_export($a, 1) . '</pre>';

$a = f();
echo '<pre>' . var_export($a, 1) . '</pre>';
$a = f();
echo '<pre>' . var_export($a, 1) . '</pre>';
$a = f();
echo '<pre>' . var_export($a, 1) . '</pre>';
