#include <stdio.h>
int main()
{
    // write a program to check if a number is divisible by 3 or 7
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    if (num % 3 == 0)
    {
        printf("The number %d is divisible by 3.\n", num);
    }
    else if (num % 7 == 0)
    {
        printf("The number %d is divisible by 7.\n", num);
    }
}