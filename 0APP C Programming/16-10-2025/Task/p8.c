// 1.	WAP to calculate the sum of square  of first 10 naturals numbers
#include <stdio.h>
void main()
{
    int sum = 0, square;
    for (int i = 1; i <= 10; i++)
    {
        square = i * i;
        sum = sum + square;
    }
    printf(" sum of first 10 natural num :%d", sum);
}