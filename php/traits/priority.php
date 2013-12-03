<?php


trait A
{
    public function go()
    {
        parent::go();
        echo "from trait";
    }

}


class B
{
    use A {
        A::go insteadof B;
    }


    public function go()
    {
        echo "from class";
    }

}


$a = new B;
$a->go();