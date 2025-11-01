/*
 * * * * *
 * * * *
 * * *
 * *
 *
 */
#include <stdio.h>
void main()
{
    int i, j;
    for (i = 1; i <= 5; i++)
    {
        for (int s = 1; s <= i; s++)
        {
            printf(" ");
        }
        for (j = 5; j >= i; j--)
        {
            printf("* ");
        }

        printf("\n");
    }
}