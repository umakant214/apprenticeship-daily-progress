/*
// WAP to store 10 number in an array and find sum of all  even index element and odd index element
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
        if (i % 2 == 0)
        {
            sume = sume + arr[i];
        }
        if (i % 2 != 0)
        {
            sumo = sumo + arr[i];
        }
    }

    printf("total even index element sum =%d \n", sume);
    printf("total odd index element sum =%d", sumo);
}