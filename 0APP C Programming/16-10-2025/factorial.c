// WAP to find factorial of 5 number
//  WAP to find n^5
#include <stdio.h>
void main()
{
    int mul = 1, n, i;
    printf("Enter number: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        mul = mul * i;
    }
    printf("factorial of this number : %d", mul);
}