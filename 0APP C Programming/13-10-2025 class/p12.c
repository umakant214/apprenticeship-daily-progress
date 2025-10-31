#include <stdio.h>
void main()
{
    // starting point is not constant
    // WAP to print even number between N to 100 where  n<100
    int n;
    printf("Enter starting value of series..");
    scanf("%d", &n);
    for (; n <= 100; n = n + 1)
    {
        if (n % 2 == 0)
        {
            printf("%d", n);
        }
    }
}