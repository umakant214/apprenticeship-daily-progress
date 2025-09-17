#include <stdio.h>
void main()
{
    int num;
    printf("Enter three digit number :");
    scanf("%d", &num);

    int d1 = num % 10;
    num = num / 10;
    int d2 = num % 10;

    num = num / 10;

    int d3 = num % 10;
    num = num / 10;

    printf("reverse number : %d%d%d", d1, d2, d3);
}