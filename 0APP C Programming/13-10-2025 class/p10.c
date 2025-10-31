// Ending is varible
// WAP to print al even number between 1 to n
// WAP to print square of all number between 2 to n

#include <stdio.h>
void main()
{
    int i, n;
    printf("Enter the ending number :");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d", i);
        }
    }
}