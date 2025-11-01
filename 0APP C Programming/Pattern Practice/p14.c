#include <stdio.h>
void main()
{
    int i, s, a = 4, j, b = 1;
    for (i = 1; i <= 9; i++)
    {
        // spaces
        for (s = 1; s <= a; s++)
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
        // star
        for (j = 1; j <= b; j++)
        {
            printf("*");
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