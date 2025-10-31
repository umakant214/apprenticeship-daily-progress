/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

#include <stdio.h>
void main()
{
    int i, j;
    for (i = 3; i <= 6; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            printf("%d ", i);
        }
        printf("\n");
    }
}