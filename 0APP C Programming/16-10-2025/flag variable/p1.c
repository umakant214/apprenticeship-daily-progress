// Toggle-flag variable,switch
#include <stdio.h>
void main()
{
    int n, flag = 0;
    printf("Enter a number to check prime...");
    scanf("%d", &n);
    for (int i = 2; i <= n - 1; i++)
    {
        if (n % i == 0)
        {
            flag = 1;
        }
    }
    if (flag == 1)
    {
        printf("%d is not prime number", n);
    }
    else
    {
        printf("%d is not prime number ", n);
    }
}