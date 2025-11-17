/*
// WAP to store your marks of 12th in an array and find the total marks
*/
#include <stdio.h>
void main()
{
    int arr[5], i, sum = 0, avg;
    printf("Enter our 12th marks : ");
    for (i = 0; i <= 4; i++)
    {
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < 4; i++)
    {
        sum = sum + arr[i];
        avg = sum / 5;
    }
    printf("total sum =%d", sum);
    printf("total avg =%d", avg);
}