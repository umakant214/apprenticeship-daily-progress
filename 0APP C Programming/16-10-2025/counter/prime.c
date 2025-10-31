// WAP to check a given is a prime number or not
#include <stdio.h>
void main()
{
    int n, count = 0;
    printf("Enter a number which check prime or not :");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            count++;
        }
    }
    if (count > 2)
    {
        printf("prime number : %d", n);
    }
    else
    {
        printf("not prime number: %d", n);
    }
   
}