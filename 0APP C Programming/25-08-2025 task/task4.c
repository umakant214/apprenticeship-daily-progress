#include <stdio.h>

void main()
{
    int preading, creading, charge;

    printf("Enter previous reading of electricity: ");
    scanf("%d", &preading);

    printf("Enter current reading of electricity: ");
    scanf("%d", &creading);

    printf("Enter per unit charge of electricity: ");
    scanf("%d", &charge);

    int units_consumed = creading - preading;
    int total_bill;

    if (preading <= creading)
    {
        total_bill = units_consumed * charge;
        printf("Total units consumed: %d\n", units_consumed);
        printf("Total bill: %d\n", total_bill);
    }
    else
    {
        printf("Invalid readings.\n");
    }
}