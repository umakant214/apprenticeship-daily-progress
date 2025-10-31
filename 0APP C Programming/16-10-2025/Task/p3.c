// find reverce of the number
#include <stdio.h>

int main()
{
    int num, reverse = 0, r;

    printf("Enter a number: ");
    scanf("%d", &num);
    for (; num != 0; num = num / 10)
    {
        r = num % 10;
        reverse = reverse * 10 + r;
    }

    printf("Reversed number: %d\n", reverse);
}