// WAP to input 10 element in an array and print all the elements of array

#include <stdio.h>
void main()
{
    // int arr[5] = {1, 2, 3, 4, 5};
    // 1 method
    //  printf(" second data= %d", arr[1]);
    //  printf(" last data= %d", arr[4]);
    int arr[10];
    printf("ENter 10 element of array :");
    for (int i = 0; i <= 9; i++)
    {
        scanf("%d", &arr[i]);
    }
    // print all element of array in linear array
    for (int i = 0; i <= 9; i++)
    {
        printf("element =%d \n", arr[i]);
    }
}