#include <stdio.h>
void main()
{
    int num1, num2;
    printf("Enter first number :");
    scanf("%d", &num1);

    printf("Enter second number :");
    scanf("%d", &num2);

    if (num1 > num2)
    {
        printf("%d  is largest number", num1);
    }
    else if (num2 > num1)
    {
        printf("%d  is largest number ", num2);
    }
    else
    {
        printf("both numbers are equals %d= %d ", num1, num2);
    }
}