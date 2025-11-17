/*
WAP to store 10 element in an array
and print element of al even number index(0th index,2nd index 4th index 6th index 8th index)
 */
#include <stdio.h>
void main()
{
    int arr[10], i;
    printf("Enter 10 integer number : ");
    for (i = 0; i <= 9; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("even index of array ");
    for (i = 0; i <= 8; i = i + 2)
    {
        printf("%d ", arr[i]);
    }
}