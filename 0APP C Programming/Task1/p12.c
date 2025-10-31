// 0,1,1,2,3,5,8,13,21,34
//WAP to print the fibonaeci series
#include <stdio.h>
void main()
{
    int a = 0, b = 1;
    printf("%d\t %d\t", a, b);
    int c = a + b;
    for (; c <= 34; c = a + b)
    {
        printf("%d\t", c);
        a = b;
        b = c;
    }
}