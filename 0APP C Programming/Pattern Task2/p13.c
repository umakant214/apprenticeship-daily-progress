/*

      A
     A B
    A B C
   A B C D
  A B C D E
 A B C D E F
  A B C D E
   A B C D
    A B C
     A B
      A
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
            printf("%c ", 64 + j);
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
            printf("%c ", 64 + j);
        }
        printf("\n");
    }
}