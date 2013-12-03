<?php
$r = session_start();
$_COOKIE['a'] = 'a';
//$status = session_status();

$_SESSION["a"]+=1;
echo "<PRE>" . var_export($status, 1) . "</PRE>";
echo session_id()  . "<PRE>". var_export($_SESSION, 1) . "</PRE>";

if($_SESSION) {
    
}
