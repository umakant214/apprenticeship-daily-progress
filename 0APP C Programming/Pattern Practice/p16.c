#include <stdio.h>
void main()
{
    int i, j, k;
    int a = 5, b = 1;
    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= a; j++)
        {
            printf(" ");
        }
        if (i < 5)
        {
            a--;
        }
        else
        {
            a++;
        }
        for (k = 1; k <= b; k++)
        {
            printf("*");
        }
        if (i < 5)
        {
            b++;
        }
        else
        {
            b--;
        }
        printf("\n");
    }
}