#include <stdio.h>
void main()
{
    int l, b;
    printf("Enter lenght of square :");
    scanf("%d", &l);

    printf("Enter breath of square :");
    scanf("%d", &b);

    int area = l * b;

    printf("Area of square : %d ", area);
}