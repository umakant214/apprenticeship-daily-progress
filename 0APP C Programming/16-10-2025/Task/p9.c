// find total number of zero present number

#include <stdio.h>

int main()
{
    int n, cz = 0, digit;

    printf("Enter a number: ");
    scanf("%d", &n);

    for (; n != 0; n = n / 10)
    {
        digit = n % 10;
        if (digit == 0)
        {
            cz++;
        }
    }

    printf("Total zeros in number: %d\n", cz);
    return 0;
}
