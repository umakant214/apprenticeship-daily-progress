#include <stdio.h>
void main()
{
    int num;
    printf("Enter a Number");
    scanf("%d", &num);
    if (num % 2 == 0)
    {
        printf("The number is divisible  by 2");
    }
    else if (num % 3 == 0)
    {
        printf("the number is divisible by 3");
    }
    else
    {
        printf("the invalid number");
    }
}