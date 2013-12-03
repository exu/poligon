<?php
$dbh = new PDO('pgsql:host=10.0.0.221;dbname=crm', 'jacek.wysocki', '');

for ($i=0; $i<1000; $i++) {
    foreach($dbh->query('SELECT * from public.system') as $row) {
        //print_r($row);
    }
}
