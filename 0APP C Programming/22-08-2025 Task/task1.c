#include <stdio.h>
void main()
{
    int num1, num2;
    printf("Enter first number :");
    scanf("%d", &num1);

    printf("Enter second  number :");
    scanf("%d", &num2);

    if (num1 == num2)
    {
        printf("Both number is equal : %d = %d", num1, num2);
    }
    else
    {
        printf("both number is not equal : %d =%d", num1, num2);
    }
}