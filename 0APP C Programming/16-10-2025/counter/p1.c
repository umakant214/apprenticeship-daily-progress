// counter - loop with counter
// WAP to find how many number ends with 2 between 1 to 100
// WAP to find total dividers of 700 between 1 to 50
#include <stdio.h>
void main()
{
    int counter = 0;
    for (int i = 1; i <= 100; i++)
    {
        if (i % 10 == 2)
        {
            counter++;
        }
    }
    printf("total number ends with 2 =%d", counter);
}