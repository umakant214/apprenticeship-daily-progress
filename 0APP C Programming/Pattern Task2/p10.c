// 6. Wap to check A given number is prime number or not

#include <stdio.h>
void main()
{
    int i, n, count = 0;
    printf("Enter a number :");
    scanf("%d", &n);
    for (i = 2; i <= n - 1; i++)
    {
        if (n % 2 == 0)
        {
            count++;
        }
    }
    if (count == 0)
    {
        printf("%d is prime number", n);
    }
    else
    {
        printf("%d is not prime number", n);
    }
}