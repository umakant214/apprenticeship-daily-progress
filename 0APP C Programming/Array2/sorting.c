#include <stdio.h>
void main()
{
    int arr[10], i, j, n, flag = 0;
    printf("Enter 10 element of array :");
    for (i = 0; i <= 9; i++)
    {
        scanf("%d", &arr[i]);
    }
    // bubble sort -
    for (i = 0; i <= 9; i++)
    {

        for (j = i + 1; j <= 9; j++)
        {
            if (arr[i] > arr[j])
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // print sorted element
        // printf("sorted element = %d \n", arr[i]);
    }
    // print sorted element
    for (i = 0; i <= 9; i++)
    {
        printf("%d\t", arr[i]);
    }

    // Binary Searching
    printf("Enter an element to search :");
    scanf("%d", &n);

    int start = 0, end = 9, mid = 4;
    while (start <= end)
    {
        if (arr[mid] == n)
        {
            printf("Element found ");
            break;
        }
        else
        {
            if (arr[mid] > n)
            {
                start = start;
                end = mid - 1;
                mid = (start + end) / 2;
            }
            else if (arr[mid] < n)
            {
                start = mid + 1;
                end = end;
                mid = (start + end) / 2;
            }
        }
    }
    if (start > end)
    {
        printf("Element not found ");
    }
}