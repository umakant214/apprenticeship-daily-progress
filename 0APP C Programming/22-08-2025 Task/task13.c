#include <stdio.h>
void main()
{
    int num;
    printf("Enter a Number");
    scanf("%d", &num);
    if (num % 5 == 0)
    {
        printf("The number is divisible  by 5");
    }
    else if (num % 7 == 0)
    {
        printf("the number is divisible by 7");
    }
    else
    {
        printf("the invalid number");
    }
}