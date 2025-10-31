//Wap to print all nuber divided by 3 & 5
#include <stdio.h>
void main()
{
    for (int i = 1; i <= 50; i = i + 1)
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            printf("%d,", i);
        }
    }
}