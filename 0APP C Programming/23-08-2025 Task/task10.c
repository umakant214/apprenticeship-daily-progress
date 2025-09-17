#include <stdio.h>
void main()
{
    int num1, num2;
    printf("Enter first number :");
    scanf("%d", &num1);

    printf("Enter second number :");
    scanf("%d", &num2);

    if (num1 < num2 && num2 > num1)
    {
        int sum = num1 + num2;
        printf("The sum is %d", sum);
    }
    else if (num1 > num2)
    {
        int sub = num1 - num2;
        printf("The substraction :%d", sub);
    }
    else if (num1 < num2 && num2 > num1)
    {
        printf("mUltiplication of num :%d", num1 * num2);
    }
    else
    {
        printf("Please enter a number ");
    }
}