#include <stdio.h>
void main()
{
    int num1, num2;
    int ch;
    printf("Enter first number : ");
    scanf("%d", &num1);

    printf("Enter second number : ");
    scanf("%d", &num2);
    printf("Enter your choice (+, -, *, /) : ");
    scanf(" %c", &ch);

    switch (ch)
    {
    case '+':
        printf("addition = %d", num1 + num2);
        break;

    case '-':
        printf("subtraction = %d", num1 - num2);
        break;

    case '*':
        printf("multiplication = %d", num1 * num2);
        break;

    case '/':
        if (num2 != 0)
            printf("division = %d", num1 / num2);
        else
            printf("division by zero error");
        break;

    default:
        printf("invalid operation");
        break;
    }
}