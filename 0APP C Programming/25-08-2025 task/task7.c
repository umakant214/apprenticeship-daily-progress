#include <stdio.h>
void main()
{
    int t_person, per_charge;
    printf("Enter total number of person :");
    scanf("%d", &t_person);

    printf("Enter per person charge :");
    scanf("%d", &per_charge);
    int total_bill = t_person * per_charge;
    if (t_person >= 1 || t_person >= 5)
    {
        total_bill = (total_bill - (total_bill * 10 / 100)) + total_bill * 18 / 100;
        printf("total bill of moive ticket %d", total_bill);
    }
    else if (t_person >= 6 || t_person >= 8)
    {
        total_bill = (total_bill - (total_bill * 12 / 100)) + total_bill * 18 / 100;
        printf("total bill of moive ticket %d", total_bill);
    }
    else
    {
        total_bill = (total_bill - (total_bill * 15 / 100)) + total_bill * 18 / 100;
        printf("total bill of moive ticket %d", total_bill);
    }
}