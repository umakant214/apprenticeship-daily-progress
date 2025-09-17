#include <stdio.h>
void main()
{
    int num1, num2;
    printf("Enter num1:");
    scanf("%d", &num1);

    printf("Enter num2:");
    scanf("%d", &num2);

    int sum = (num1 * num1 * num1) + (num2 * num2 * num2);
    printf("sum of number : %d", sum);
}