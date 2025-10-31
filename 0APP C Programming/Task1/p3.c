// WAp to print all number that is  divided by 3 and 7 between 1 to 70
#include <stdio.h>
void main()
{
    for (int i = 1; i <= 70; i = i + 1)
    {
        if (i % 3 == 0 && i % 7 == 0)
        {
            printf("%d\t", i);
        }
    }
}