// WAp to print all even numbers between n to 100 where n<100
#include <stdio.h>
void main()
{
    int i, n;
    printf("Enter the starting point number :");
    scanf("%d", &n);
    for (; i <= 100; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d", i);
        }
    }
}