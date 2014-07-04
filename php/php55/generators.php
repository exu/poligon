<?php

/*
Support for generators has been added via the yield keyword. Generators
provide an easy way to implement simple iterators without the overhead or
complexity of implementing a class that implements the Iterator interface.

A simple example that reimplements the range() function as a generator (at
least for positive step values):
 */

function xrange($start, $limit, $step = 1)
{
    for ($i = $start; $i <= $limit; $i += $step) {
        yield $i;
    }
}

echo 'Single digit odd numbers: ';

/*
 * Note that an array is never created or returned,
 * which saves memory.
 */
foreach (xrange(1, 9, 2) as $number) {
    echo "$number ";
}

echo "\n";
