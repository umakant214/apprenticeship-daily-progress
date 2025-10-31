// WAp to print all numbers that is divisible by 3 between 1 to n
#include <stdio.h>
void main()
{
    int i, n;
    printf("Enter the ending number :");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        if (i % 3 == 0)
        {
            printf("%d", i);
        }
    }
}