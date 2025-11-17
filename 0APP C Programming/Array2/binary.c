#include <stdio.h>
void main()
{
    int arr[10];
    int i, n;
    printf("Enter 10 integer number :");

    for (i = 0; i <= 9; i++)
    {
        scanf("%d", &arr[i]);
    }
    // bubble sort
    int temp, j;
    for (i = 0; i <= 9; i++)
    {
        for (j = i + 1; j <= 9; j++)
        {
            if (arr[i] > arr[j])
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // printf("sorted element = %d\t", arr[i]);
    }

    // print sorted array
    printf("Sorted elements: ");
    for (i = 0; i < 10; i++)
    {
        printf("%d ", arr[i]);
    }

    // searching
    printf("Enter which number is searching :");
    scanf("%d", &n);
    int start = 0, end = 8;
    int mid;
    while (start <= end)
    {
        mid = (start + end) / 2;
        if (arr[mid] == n)
        {
            printf("Element is found");
            break;
        }
        else if (arr[mid] < n)
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
        if (start > end)
        {
            printf("element not found ");
        }
    }
}