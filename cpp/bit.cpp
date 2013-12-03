#include <iostream>

int main(int argc, char *argv[])
{
    using namespace std;
    char c = 0x00; //osiem zer
    c |= (1<<7); //zmieniam ósmy bit na 1
    c |= (1<<0); //zmieniam pierwszy bit na 1
    c |= (1<<5); //zmieniam szósty bit na 1
    //jakies inne zmiany bitow
    for(int i = 7; i>=0; i--) {
        int val = (c>>i)&0x01;
        cout << val;
    }

    return 0;
}
