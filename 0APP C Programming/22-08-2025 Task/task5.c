#include <stdio.h>
void main()
{
    int num1, num2, num3;
    printf("Enter first number :");
    scanf("%d", &num1);

    printf("Enter second number :");
    scanf("%d", &num2);
    printf("Enter third number :");
    scanf("%d", &num3);

    if (num1 >= num2 && num2 >= num3)
    {
        printf("%d  is largest number", num1);
    }
    else if (num2 >= num1 && num2 >= num3)
    {
        printf("%d  is largest number ", num2);
    }
    else
    {
        printf("%d is largest number ", num3);
    }
}