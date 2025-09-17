#include <stdio.h>
void main()
{
    int num;
    printf("Enter a num :");
    scanf("%d", &num);
    if (num > 0)
    {
        printf("Your number is positive : %d", num);
    }
    else if (num < 0)
    {
        printf("your number is negative :%d", num);
    }
    else if (num == 0)
    {
        printf("Your number is Zero :%d", num);
    }
}