/*
WAP to store 10 element in an array and count how many even number in array
 */
#include <stdio.h>
void main()
{
    int arr[10], i, count = 0;
    printf("Enter 10 integer number :");
    for (i = 0; i <= 9; i++)
    {
        scanf("%d ", &arr[i]);
    }
    printf("count how many odd number :");
    for (i = 0; i <= 9; i++)
    {
        if (arr[i] % 2 != 0)
        {
            count++;
        }
    }
    printf("%d ", count);
}