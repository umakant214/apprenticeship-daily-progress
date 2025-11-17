// WAP to store 10 elements in array and search a given element is present in array or not (linear search)   how many time element given this array
#include <stdio.h>
void main()
{
    int arr[10], i, flag = 0;
    printf("Enter 10 element : ");
    for (i = 0; i <= 9; i++)
    {
        scanf("%d", &arr[i]);
    }
    int n;
    printf("Enter element to search :");
    scanf("%d", &n);
    for (i = 0; i <= 9; i++)
    {
        if (n == arr[i])
        {
            printf("search successful = %d ", arr[i]);
            flag = 1;
        }
    }
    if (flag == 0)
    {
        printf("search unsuccessful ");
    }
}