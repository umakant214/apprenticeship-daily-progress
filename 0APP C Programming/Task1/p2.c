// WAp to print all number that divided with 2 between 1 to 50
#include <stdio.h>
void main()
{
    for (int i = 1; i <= 50; i = i + 1)
    {
        if (i % 2 == 0)
        {
            printf("%d\t", i);
        }
    }
}