
// 7. WAP to print all prime numbers between 1 to 1000

#include <stdio.h>
int main()
{
    int i, j, count = 0;

    for (i = 1; i <= 1000; i++)
    {
        for (j = 2; j <= i - 1; j++)
        {
            if (i % j == 0)
            {
                count++;
            }
        }
        if (count == 0)
        {
            printf("%d ", i);
        }
        count = 0;
    }
}