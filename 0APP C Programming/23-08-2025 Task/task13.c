#include <stdio.h>
int main()
{
    int a, b, c;
    printf("Enter three sides of a triangle: ");
    scanf("%d %d %d", &a, &b, &c);
    if (a + b > c && a + c > b && b + c > a)
    {
        printf("Valid triangle\n");
    }
    else
    {
        printf("Invalid triangle\n");
    }
}