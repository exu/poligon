<?php
echo " - " . memory_get_usage() . "\n";


function normalize($key)
{
    return strtoupper($key);
}

function classifyKeysReferenced(&$data)
{
    $result = [];
    foreach ($data as $key => $value) {
        if (is_array($value)) {
            classifyKeysReferenced($data[$key]);
        }
        $result[normalize($key)] = $data[$key];
    }

    $data = $result;
}

function classifyKeysReturned($data)
{
    $result = [];
    foreach ($data as $key => $value) {
        if (is_array($value)) {
            $data[$key] = classifyKeysReturned($data[$key]);
        }

        $result[normalize($key)] = $data[$key];
    }

    return $result;
}


function testIt($count) {
    for ($i = 0; $i < $count; $i++) {
        $array2['SomeNiceKey_' . $i] = ['a_bra_kadabra' => [1,2,3,4,$i], 'SOME' => 'asasa'.$i, 'None' => ['someKind' => 'aasas'.$i]];
    }

    $memoryUsage = memory_get_usage(true);
    $t = microtime(true);
    $result = classifyKeysReturned($array2);
    $returnTiming = microtime(true) - $t;
    $returnMem = memory_get_usage(true) - $memoryUsage;

    unset($result);
    unset($array2);

    for ($i = 0; $i < $count; $i++) {
        $array1['SomeNiceKey_' . $i] = ['a_bra_kadabra' => [1,2,3,4,$i], 'SOME' => 'asasa'.$i, 'None' => ['someKind' => 'aasas'.$i]];
    }

    $memoryUsage = memory_get_usage(true);
    $t = microtime(true);
    classifyKeysReferenced($array1);
    $referenceTiming = microtime(true) - $t;
    $referenceMem = memory_get_usage(true) - $memoryUsage;

    echo "\n\nStatistics for array with $count elements";
    echo "\nReference speed is: " . (string)(($returnTiming/$referenceTiming) * 100) . "% of return ";
    echo "\nReference mem usage is: " . (string)(($referenceMem / $returnMem) * 100) . "% of return ";

    unset($array1);
}

foreach ([100, 1000, 10000, 100000, 1000000] as $value) {
    testIt($value);
}
