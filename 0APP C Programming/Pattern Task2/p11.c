// Wap to print All numbers that Is divisible by 3 and 5 between 1 to 100

#include <stdio.h>
void main()
{
    int i;
    for (i = 1; i <= 100; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            printf("%d\t", i);
        }
    }
}