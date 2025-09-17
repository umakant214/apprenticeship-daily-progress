
// Input year ,month,date of current date
// and year ,month,date of your dob is smaller than current date or not
#include <stdio.h>
int main()
{
    int currYear, currMonth, currDay;
    int dobYear, dobMonth, dobDay;

    printf("Enter current year: ");
    scanf("%d", &currYear);
    printf("Enter current month: ");
    scanf("%d", &currMonth);
    printf("Enter current day: ");
    scanf("%d", &currDay);

    printf("Enter your date of birth year: ");
    scanf("%d", &dobYear);
    printf("Enter your date of birth month: ");
    scanf("%d", &dobMonth);
    printf("Enter your date of birth day: ");
    scanf("%d", &dobDay);

    if (dobYear < currYear ||
        (dobYear == currYear && dobMonth < currMonth) ||
        (dobYear == currYear && dobMonth == currMonth && dobDay < currDay))
    {
        printf("Your date of birth is smaller than the current date.\n");
    }
    else
    {
        printf("Your date of birth is not smaller than the current date.\n");
    }
}