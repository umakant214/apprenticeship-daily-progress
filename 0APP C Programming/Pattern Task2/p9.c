/*

*/
#include <stdio.h>
void main()
{
    int i, j;
    int a = 4, b = 1;
    for (i = 1; i <= 9; i++)
    {
        for (int s = 9; s >= a; s--)
        {
            printf(" ");
        }
        if (i < 5)
        {
            a--;
        }
        else
        {
            a++;
        }
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }
        if (i < 5)
        {

            b = b + 2;
        }
        else
        {

            b = b - 2;
        }
        printf("\n");
    }
}