/*
******
*****
****
***
**
*
*/
#include <stdio.h>
void main()
{
    int i, j;
    for (i = 1; i <= 6; i++)
    {
        for (int s = 1; s <= i - 1; s++)
        {
            printf(" ");
        }
        for (j = 6; j >= i; j--)
        {
            printf("*");
        }
        printf("\n");
    }
}