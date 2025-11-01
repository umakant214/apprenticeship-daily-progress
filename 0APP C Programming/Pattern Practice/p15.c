#include <stdio.h>
void main()
{
    int i, s, k = 1;
    int a = 1;
    for (i = 1; i <= 11; i++)
    {
        // spaces
        for (s = 1; s <= a; s++)
        {
            printf(" ");
        }
        for (k = 1; k <= i; k++)
        {
            printf("* ");
        }

        // star
        printf("\n");
    }
}