//  WAP to  find n^5
#include <stdio.h>
void main()
{
    int n, m, pow = 1;
    printf("Enter base value");
    scanf("%d", &n);

    for (int i = 1; i <= 5; i++)
    {
        pow *= n;
    }
    printf("power of this number : %d", pow);
}