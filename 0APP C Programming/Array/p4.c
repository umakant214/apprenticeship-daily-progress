/*
WAP to store 10 element in an array
and print element of al even number index(0th index,2nd index 4th index 6th index 8th index)
 */
#include <stdio.h>
void main()
{
    int arr[20], i;
    printf("Enter 20 integer number : ");
    for (i = 0; i <= 19; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Even index of even array ");
    // for (i = 0; i <= 18; i = i + 2)
    for (i = 0; i <= 19; i = i + 1)
    {
        // printf("%d ", arr[i]);
        if (i % 2 == 0 && arr[i] % 2 == 0)
        {
            printf("%d ", arr[i]);
        }
    }
}