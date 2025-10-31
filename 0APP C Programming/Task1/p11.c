// WAp to print all numbers that is divisiable by 7 between n to 100
#include <stdio.h>
void main()
{
    int n;
    printf("Enter the starting number :");
    scanf("%d", &n);
    for (; n <= 1000; n++)
    {
        if (n % 7 == 0)
        {
            printf("%d \n", n);
        }
    }
}