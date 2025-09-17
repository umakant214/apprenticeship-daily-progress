#include <stdio.h>
void main()
{
    int temp;
    printf("Enter temprataur :");
    scanf("%d", &temp);

    if (temp <= 0)
    {
        printf("temprature is below freezing pint ");
    }
    else
    {
        printf("temprature is above freezing pint ");
    }
}