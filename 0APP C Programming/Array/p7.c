/*
WAP to store 10 element in an array and count how many even, odd,zero number in array
 */
#include <stdio.h>
void main()
{
    int arr[10], i, counteven = 0, countodd = 0, countzero = 0;
    printf("Enter 10 integer number :");
    for (i = 0; i <= 9; i++)
    {
        scanf("%d ", &arr[i]);
    }

    for (i = 0; i <= 9; i++)
    {
        if (arr[i] % 2 == 0)
        {
            counteven++;
        }
        else if (arr[i] == 0)
        {
            countodd++;
        }
        else if (arr[i] == 0)
        {
            countzero++;
        }
        else
        {
            printf("ENter valid number");
        }
    }
    printf("even =%d \n ", counteven);
    printf("odd=%d \n", countodd);
    printf("zero=%d \n", countzero);
}