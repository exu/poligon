<?php

// hash example
echo password_hash("dupazbita", PASSWORD_DEFAULT)."\n\n";




// and verify
$hash = '$2y$10$N/G07BcFWkDMnk0XRYAoYu2ym7QQPH4UhFmQkDHbMbQPetYXmuGnW';

if (password_verify('dupazbita', $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}

echo "\n";
