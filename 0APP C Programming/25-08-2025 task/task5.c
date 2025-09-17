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

    if (creading < preading)
    {
        printf(" Current reading must be greater than or equal to previous reading.\n");
    }

    int units_consumed = creading - preading;
    int total_bill;

    if (units_consumed < 500)
    {
        total_bill = units_consumed * 7;
        printf("Total units consumed: %d\n", units_consumed);
        printf("Total bill: %d\n", total_bill);
    }
    else if (units_consumed < 1000 && units_consumed >= 500)
    {
        total_bill = units_consumed * 8;
        printf("Total units consumed: %d\n", units_consumed);
        printf("Total bill: %d\n", total_bill);
    }
    else
    {
        total_bill = units_consumed * 10;
        printf("Total units consumed: %d\n", units_consumed);
        printf("Total bill: %d\n", total_bill);
    }
}