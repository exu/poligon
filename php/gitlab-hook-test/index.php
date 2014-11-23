<?php

$a = var_export($_REQUEST, 1);
echo "<PRE>" . print_r($a, 1) . "</PRE>";

file_put_contents('a.txt', $a);
