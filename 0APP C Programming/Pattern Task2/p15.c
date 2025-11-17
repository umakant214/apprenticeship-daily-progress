// 8.	WAP to print all prime numbers between 1 to n
#include <stdio.h>
int main()
{
    int i, j, n, count = 0;
    printf("Enter a number :");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        for (j = 2; j <= i - 1; j++)
        {
            if (i % j == 0)
            {
                count++;
            }
        }
        if (count == 0)
        {
            printf("%d ", i);
        }
        count = 0;
    }
}