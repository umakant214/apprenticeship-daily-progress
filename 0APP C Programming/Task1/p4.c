// WAp to print all number between 1 to 100 which squre number is less than 100
#include <stdio.h>
void main()
{

    for (int i = 0; i <= 100; i = i + 1)
    {
        int square = i * i;
        if (square <= 100)
        {
            printf("%d\n", i * i);
        }
    }
}