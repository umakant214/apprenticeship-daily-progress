// find smallest element of array
#include <stdio.h>
void main()
{
    int arr[10], i;
    printf("ENter 10 integer element :");
    for (i = 0; i <= 9; i++)
    {
        scanf("%d", &arr[i]);
    }
    int small = arr[0];
    for (i = 1; i <= 9; i++)
    {
        if (arr[i] < small)
        {
            small = arr[i];
        }
    }
    printf(" smallest num=%d", small);
}