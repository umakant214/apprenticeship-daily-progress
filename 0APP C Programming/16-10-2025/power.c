//  WAP to  find n^m
#include <stdio.h>
void main()
{
    int n, m, pow = 1;
    printf("Enter base value");
    scanf("%d", &n);

    printf("Enter power value");
    scanf("%d", &m);

    for (int i = 1; i <= m; i++)
    {
        pow *= n;
    }
    printf("power of this number : %d", pow);
}