// Multiply multiple value in loop
//	WAP to print multiply of first 10 naturals numbers
// 1.	WAP to print addition of first 50 naturals numbers
#include <stdio.h>
void main()
{
    int mul = 1;
    for (int i = 1; i <= 10; i++)
    {
        mul = mul * i;
    }
    printf(" multiply of first 10 natural num :%d", mul);
}