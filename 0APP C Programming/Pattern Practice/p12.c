/*
              *
            *   *
        *     *     *
    *      *      *      *
*     *      *     *        *

*/

#include <stdio.h>
void main()
{
    int i, j, s;
    for (i = 1; i <= 5; i++)
    {
        // loop to print spaces
        for (s = 1; s <= 5 - i; s++)
        {
            printf(" ");
        }
        for (j = 1; j <= 2 * i - 1; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}