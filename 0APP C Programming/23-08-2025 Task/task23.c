// write a program to input to input day,month , year and check wheather the date is valid (exclude leap year logic);

#include <stdio.h>

int main()
{
    int day, month, year;
    printf("Enter day: ");
    scanf("%d", &day);
    printf("Enter month: ");
    scanf("%d", &month);
    printf("Enter year: ");
    scanf("%d", &year);

    if (year < 2000 || year > 2025)
    {
        printf("Invalid year. Please enter a year between 2000 and 2025.\n");
    }

    if (month < 1 || month > 12)
    {
        printf("Invalid month. Please enter a month between 1 and 12.\n");
    }

    int max_days;
    if (month == 2)
    {
        max_days = 28;
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11)
    {
        max_days = 30;
    }
    else
    {
        max_days = 31;
    }

    if (day < 1 || day > max_days)
    {
        printf("Invalid day. Please enter a valid day for the given month.\n");
        return 1;
    }

    printf("The date %02d/%02d/%04d is valid.\n", day, month, year);
    return 0;
}
