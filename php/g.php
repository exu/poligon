<?
$r = session_start();
echo "<PRE>" . var_export($r, 1) . "</PRE>";

echo $_SESSION['a'];