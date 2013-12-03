<?php

function Bar() {
    throw new Exception;
}

function Foo() {
    Bar();
}

try {
    Foo();
} catch(Exception $e) {
    echo json_encode($e->getTrace());
  }