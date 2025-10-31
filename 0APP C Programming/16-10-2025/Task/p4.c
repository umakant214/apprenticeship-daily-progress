// WAP to find factorial of 5 number
//  WAP to find n^5
#include <stdio.h>
void main()
{
    int mul = 1, i;
    for (i = 1; i <= 5; i++)
    {
        mul = mul * i;
    }
    printf("factorial of 5 number : %d", mul);
}