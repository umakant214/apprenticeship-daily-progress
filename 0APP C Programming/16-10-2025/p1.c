// 1.	WAP to print addition of first 50 naturals numbers
#include <stdio.h>
void main()
{
    int sum = 0;
    for (int i = 1; i <= 10; i++)
    {
        sum = sum + i;
    }
    printf(" sum of first 10 natural num :%d", sum);
}