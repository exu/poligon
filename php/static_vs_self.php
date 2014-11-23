<?php
namespace {

    class Animal
    {
        public static $name = "animal";

        // Return the class that is represented by "self::"
        public function getSelfClass()
        {
            return get_class();
        }

        // Return the class that is represented by "static::"
        public function getStaticClass()
        {
            return get_called_class();
        }

        public function selfVar()
        {
            return self::$name;
        }

        public function staticVar()
        {
            return static::$name;
        }

        public function selfMethod()
        {
            return self::getName();
        }

        public function staticMethod()
        {
            return static::getName();
        }

        protected function getName()
        {
            return "animal";
        }
    }

    class Penguin extends Animal
    {
        public static $name = "penguin";

        protected function getName()
        {
            return "penguin";
        }
    }

    echo  "Penguin::selfVar() " . var_export(Penguin::selfVar(), 1) . "\n";
    echo  "Penguin::staticVar() " . var_export(Penguin::staticVar(), 1) . "\n";
    echo  "Penguin::selfMethod() " . var_export(Penguin::selfMethod(), 1) . "\n";
    echo  "Penguin::staticMethod() " . var_export(Penguin::staticMethod(), 1) . "\n";
    echo  "Penguin::getSelfClass() " . var_export(Penguin::getSelfClass(), 1) . "\n";
    echo  "Penguin::getStaticClass() " . var_export(Penguin::getStaticClass(), 1) . "\n";
}
