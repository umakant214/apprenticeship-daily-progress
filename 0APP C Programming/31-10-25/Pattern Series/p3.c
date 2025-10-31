// A A A A A
// B B B B B
// C C C C C
// D D D D D
// E E E E E

#include <stdio.h>
void main()
{
    int i, j;
    // char ele = 'A';
    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            // printf("%c ", ele);
            printf("%c ", 64 + i);
        }
        //  ele++;
        printf("\n");
    }
}
