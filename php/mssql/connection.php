<?php

ini_set('display_errors', 1);
$server = '192.168.0.20:49322';
$link = mssql_connect($server, 'exu', 'p-o0i9');

if (!$link) {
    die('<br/><br/>Something went wrong while connecting to MSSQL');
 } else {
     $selected = mssql_select_db("test", $link)
     or die("Couldn't open database databasename");
     echo "connected to databasename\n";

     $result = mssql_query('SELECT id, name FROM dbo.users');

     while($row = mssql_fetch_array($result))
         echo $row["name"]. "\n";
 }

echo "\n\n==============================================\n\n";


$db = new PDO("dblib:host=192.168.0.20:49322;dbname=test", "exu", "p-o0i9");

print_r($db);

$sql = 'SELECT id, name FROM dbo.users';
foreach ($db->query($sql) as $row) {
    print $row['name'] . "\n";
 }