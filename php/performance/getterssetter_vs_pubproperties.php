<?php
class dog {
  public $name = '';

  public function setName($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }
}

class cat {
  protected $name = '';

  public function __set($name, $value) {
      $this->$name = $value;
  }

  public function __get($name) {
      return $this->$name;
  }
}

class worm implements ArrayAccess {
  public $name = '';

  public function offsetUnset($name) {}
  public function offsetExists($name) {}

  public function offsetSet($name, $value) {
      $this->$name = $value;
  }

  public function offsetGet($name) {
      return $this->$name;
  }
}

function test_getters_setters() {
    echo __FUNCTION__ . ":\t" ;
    $Class = new dog();
    $s = 0;
    for ($x=0; $x<10; $x++) { 
        $t = microtime(true);
        for ($i=0; $i<1000000; $i++) { 
            $Class->setName("rover");
            $n = $Class->getName();
        }
        $s +=  microtime(true) - $t;
    }
    echo ($s / $x) . "\n";
}

function test_public_properties() {
    echo __FUNCTION__ . ":\t" ;
    $Class = new dog();
    $s = 0;
    for ($x=0; $x<10; $x++) { 
        $t = microtime(true);
        for ($i=0; $i<1000000; $i++) { 
            $Class->name = "Rover";
            $n = $Class->name;
        }
        $s +=  microtime(true) - $t;
    }
    echo ($s / $x) . "\n";
}

function test_magic_methods() {
    echo __FUNCTION__ . ":\t" ;
    $Class = new cat();
    $s = 0;
    for ($x=0; $x<10; $x++) { 
        $t = microtime(true);
        for ($i=0; $i<1000000; $i++) { 
            $Class->name = "Rover";
            $n = $Class->name;
        }
        $s +=  microtime(true) - $t;
    }
    echo ($s / $x) . "\n";
}

function test_array_access() {
    echo __FUNCTION__ . ":\t" ;
    $Class = new worm();
    $s = 0;
    for ($x=0; $x<10; $x++) { 
        $t = microtime(true);
        for ($i=0; $i<1000000; $i++) { 
            $Class['name'] = "Rover";
            $n = $Class['name'];
        }
        $s +=  microtime(true) - $t;
    }
    echo ($s / $x) . "\n";
}

test_getters_setters();
test_public_properties();
test_magic_methods();
test_array_access();
