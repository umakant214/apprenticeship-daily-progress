// 0,1,3,6,10,15,21.............
#include <stdio.h>
void main()
{
    int i = 0;
    int n = 0, j;
    printf("Enter ending point number :");
    scanf("%d", &j);
    for (int i = 0; i <= j; i = i + n)
    {
        printf("%d\t", i);
        n = n + 1;
    }
}