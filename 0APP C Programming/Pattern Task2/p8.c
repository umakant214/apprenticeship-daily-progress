
/*
A
B C
D E F
G H I J
 */
#include <stdio.h>
void main()
{
    int i, j;
    int n = 1;
    for (i = 1; i <= 4; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%c ", 64 + n);
            n++;
        }
        printf("\n");
    }
}