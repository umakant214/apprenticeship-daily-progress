// find largest element of array
#include <stdio.h>
void main()
{
    int arr[10], i;
    printf("ENter 10 integer element :");
    for (i = 0; i <= 9; i++)
    {
        scanf("%d", &arr[i]);
    }
    int large = arr[0];
    for (i = 1; i <= 9; i++)
    {
        if (arr[i] > large)
        {
            large = arr[i];
        }
    }
    printf("First  largest number =%d", large);
}

/// second largest number findout
// Quick short
// Marge short