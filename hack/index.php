<?hh

function a(int $a): bool {
    return $a > 1;
}

echo a(11) ? "YES" : "NO";
