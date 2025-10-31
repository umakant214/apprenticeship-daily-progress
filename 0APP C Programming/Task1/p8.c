// WAp to print cube of all numbers between 2 to n
#include <stdio.h>
void main()
{
    int i, n;
    printf("Enter the ending number :");
    scanf("%d", &n);
    for (i = 2; i <= n; i = i + 1)
    {
        int cube = i * i * i;
        printf("%d\n", cube);
    }
}