#include <stdio.h>
void main()
{
    int num1, num2, num3;
    printf("Enter num1:");
    scanf("%d", &num1);

    printf("Enter num2:");
    scanf("%d", &num2);

    printf("Enter num3:");
    scanf("%d", &num3);

    int sum = (num1 * num1 * num1) + (num2 * num2 * num2) + (num3 * num3 * num3);
    printf("sum of number : %d", sum);
}