/*
 *****
  *****
   *****
    *****
     *****
 */
#include <stdio.h>
void main()
{
    int i, j;
    for (i = 1; i <= 5; i++)
    {
        for (int s = 0; s <= i; s++)
        {
            printf(" ");
        }
        for (j = 1; j <= 5; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}