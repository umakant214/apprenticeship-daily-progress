/*
   1
  23
 456
 */
#include <stdio.h>
void main()
{
    int i, j;
    int n = 1;
    for (i = 1; i <= 3; i++)
    {
        for (int s = 3; s >= i; s--)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("%d", n);
            n++;
        }
        printf("\n");
    }
}