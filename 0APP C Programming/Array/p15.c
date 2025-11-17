#include <stdio.h>
void main()
{
    int arr[3], i, n, count = 0;
    printf("Enter 3 integer number :");
    for (int i = 0; i <= 2; i++)
    {
        scanf("%d", &n);
    }
    for (i = 0; i <= 2; i++)
    {
        if (arr[i] % 2 == 0)
        {
            count++;
        }
    }
    printf("even= %d", count);
}