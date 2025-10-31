//WAp to print all number divided by 3 & 5 between 1 to 50.
#include <stdio.h>
void main()
{
    for (int i = 1; i <= 50; i = i + 1)
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            printf("%d\t", i);
        }
    }
}