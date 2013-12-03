<?php


function a ($i=0) {
    $a = Array(3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3);
    fprintf(STDERR, "$i\n");
nn    unset($a);
    return a(++$i);
}


a();


die;

$data = new SplFixedArray(1000000);
for ($i = 0; $i < 1000000; ++$i)
    {
        fprintf(STDERR, "$i\n");
        $data->offsetSet($i, array(1, 2));
    }




ab -kc 1000 -n 100 http://www.qarson.fr/achetez/Citroen+C3+Picasso+Facelift/pas-cher
