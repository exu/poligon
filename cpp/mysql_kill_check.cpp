#include <stdio.h>
#include <stdlib.h>
#include <cstdlib>
#include <ctime>
#include <sys/types.h>
#include <unistd.h>
#include <string.h>

int main(void) {
    int one, two, ret;
    time_t start = time(0);
    time_t now;

    srand(getpid()*start);
    while (1) {
        one = rand();
        two = rand();
        ret = memcmp(&one, &two, sizeof(int));
        if (ret < -128 || ret > 127)
            break;
        time(&now);
        if (now - start > 10) {
            printf("Not triggered in 10 seconds, *probably* not vulnerable..\n");
            return 1;
        }
    }
    printf("Vulnerable! memcmp returned: %d\n", ret);
    return 0;
}
