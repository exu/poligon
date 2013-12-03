<?php
/**
 * Hello
*/
$Password1 = 'WrongPassword';
$Password2 = 'SuperSecurePassword123';
$HashedPassword = '$6$rounds=9999999$4fe83cb491c81$CfU7sCbifTuTwBAjoHrdNQjUqHpqexZfXgWAh1/ihqM2TlQACVQGoldi8xrHBgW7Wl/JbMQGYoEDFFg6Jrtil0';

// Now, what about checking if a password is the right password?
$time = microtime();
if (crypt($Password1, $HashedPassword) == $HashedPassword) {
    echo "Hashed Password matched Password1";
} else {
    echo "Hashed Password didn't match Password1";
}
echo "\n";
echo microtime() - $time;
$time = microtime();
if (crypt($Password2, $HashedPassword) == $HashedPassword) {
        echo "Hashed Password matched Password2";
} else {
        echo "Hashed Password didn't match Password2";
}
echo microtime() - $time;

$time = microtime();
for ($i = 0; $i < 1000; $i++) {
    if (crypt($Password1, $HashedPassword) == $HashedPassword) {
    } else {
    }
}
