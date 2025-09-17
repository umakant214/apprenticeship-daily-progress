#include <stdio.h>
void main()
{
    int num1, num2, num3;
    printf("Enter first number :");
    scanf("%d", &num1);

    printf("Enter second number :");
    scanf("%d", &num2);

    printf("Enter three number :");
    scanf("%d", &num3);

    int middle;
    if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3))
    {
        middle = num1;
    }
    else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3))
    {
        middle = num2;
    }
    else
    {
        middle = num3;
    }
    printf("The middle number is %d", middle);
}