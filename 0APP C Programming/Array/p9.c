/*
// WAP to store your marks of 12th in an array and find the total marks even element and odd element
*/
#include <stdio.h>
void main()
{
    int arr[5], i, sume = 0, sumo = 0;
    printf("Enter our 12th marks : ");
    for (i = 0; i <= 4; i++)
    {
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < 4; i++)
    {
        if (arr[i] % 2 == 0)
        {
            sume = sume + arr[i];
        }
        if (arr[i] % 2 != 0)
        {
            sumo = sumo + arr[i];
        }
    }

    printf("total even element sum =%d", sume);
    printf("total odd element sum =%d", sumo);
}