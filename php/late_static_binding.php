<?php
/*

  As of PHP 5.3.0, PHP implements a feature called late static bindings which
can be used to reference the called class in a context of static inheritance.

More precisely, late static bindings work by storing the class named in the
last "non-forwarding call".

In case of static method calls, this is the class explicitly named (usually
the one on the left of the :: operator); in case of non static method calls,
it is the class of the object.

A "forwarding call" is a static one that is introduced by self::, parent::,
static::, or, if going up in the class hierarchy, forward_static_call(). The
function get_called_class() can be used to retrieve a string with the name of
the called class and static:: introduces its scope.

This feature was named "late static bindings" with an internal perspective in
mind. "Late binding" comes from the fact that static:: will not be resolved
using the class where the method is defined but it will rather be computed
using runtime information. It was also called a "static binding" as it can be
used for (but is not limited to) static method calls.

*/

/*

class A
{
    public static function who()
    {
        echo __CLASS__;
    }
    public static function test()
    {
        static::who(); // Here comes Late Static Bindings
    }
}

class B extends A
{
    public static function who()
    {
        echo __CLASS__;
    }
}

B::test();

*/

class A
{
    private function foo()
    {
        echo "success!\n";
    }
    public function test()
    {
        $this->foo();
        static::foo();
    }
}

class B extends A
{
   /* foo() will be copied to B, hence its scope will still be A and
    * the call be successful */
}

class C extends A
{
    private function foo()
    {
        /* original method is replaced; the scope of the new one is C */
    }
}

$b = new B();
$b->test();
$c = new C();
$c->test();   //fails
