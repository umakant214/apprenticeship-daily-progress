// WAP to print table of 1 to 10
#include <stdio.h>
void main()
{
    int n;
    printf("Enter a number :");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= 10; j++)
        {
            printf("%d\t", i * j);
        }
        printf("\n");
    }
}