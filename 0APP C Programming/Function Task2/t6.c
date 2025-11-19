// Create aan UDF to calculate power
#include <stdio.h>

long Power(int base, int power)
{
    long result = 1;
    int i;

    for (i = 1; i <= power; i++)
    {
        result = result * base;
    }

    return result;
}

void main()
{
    int base, pow;
    long ans;

    printf("Enter base: ");
    scanf("%d", &base);

    printf("Enter power: ");
    scanf("%d", &pow);

    ans = Power(base, pow);

    printf("%d ^ %d = %ld\n", base, pow, ans);
}
