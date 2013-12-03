<?php
$Password = 'SuperSecurePassword123';

// These only work for CRYPT_SHA512, 
// but it should give you an idea of how crypt() works.
$Salt = uniqid(); // Could use the second parameter to give it more entropy.
$Algo = '6'; // This is CRYPT_SHA512 as shown on http://php.net/crypt
$Rounds = '999999'; // The more, the more secure it is!

// This is the "salt" string we give to crypt().
$CryptSalt = '$' . $Algo . '$rounds=' . $Rounds . '$' . $Salt;

$HashedPassword = crypt($Password, $CryptSalt);
echo "Generated a hashed password: " . $HashedPassword . "\n";
   for ($i = 0; $i < 90; $i++) {
       echo "Kakakak";
   }
