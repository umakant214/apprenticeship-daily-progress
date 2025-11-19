// int IsEven(int n)

#include <stdio.h>
int IsEven(int n)
{
    if (n % 2 == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void main()
{
    int num;
    printf("Enter a number :");
    scanf("%d", &num);
    int result = IsEven(num);
    if (result == 1)
        printf("even number");
    else if (result == 0)
        printf("odd number");
}