/*

     *
    * *
   * * *
  * * * *
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
        for(int s=5;s>=i;s--)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }

    ///
    for (i = 4; i >= 1; i--)
    {
        for(int s=5;s>=i;s--)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
}