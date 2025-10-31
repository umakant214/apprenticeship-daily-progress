#include <stdio.h>
void main()
{
    // 0,1,3,6,10,15,21
    int i = 0;
    int n = 0;
    for (; i <= 21; i = i + n)
    {
        printf("%d \t", i);
        n = n + 1;
    }
}