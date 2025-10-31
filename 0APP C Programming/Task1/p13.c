// 0,1,3,6,10,15,21
#include <stdio.h>
void main()
{
    int i = 0;
    int n = 0;
    for (int i = 0; i <= 21; i = i + n)
    {
        printf("%d\t", i);
        n = n + 1;
    }
}