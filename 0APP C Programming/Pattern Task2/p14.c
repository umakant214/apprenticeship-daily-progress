/*

      1
     1 2
    1 2 3
   1 2 3 4
  1 2 3 4 5
 1 2 3 4 5 6
  1 2 3 4 5
   1 2 3 4
    1 2 3
     1 2
      1
*/
#include <stdio.h>
void main()
{
    int i, j;
    for (i = 1; i <= 6; i++)
    {
        for (int s = 6; s >= i; s--)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("%d ", j);
        }
        printf("\n");
    }

    ///
    for (i = 5; i >= 1; i--)
    {
        for (int s = 6; s >= i; s--)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("%d ", j);
        }
        printf("\n");
    }
}