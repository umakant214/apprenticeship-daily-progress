/*
A
B B
C C C
D D D D
 */
#include <stdio.h>
void main()
{
    int i, j;
    for (i = 1; i <= 4; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%c ", 64 + i);
        }
        printf("\n");
    }
}