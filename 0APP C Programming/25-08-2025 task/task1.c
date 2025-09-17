#include <stdio.h>
int main()
{
    int year, month, day;
    printf("Enter year: ");
    scanf("%d", &year);

    printf("Enter month: ");
    scanf("%d", &month);

    printf("Enter day: ");
    scanf("%d", &day);

    if (month < 1 || month > 12)
    {
        printf("Invalid month: %d\n", month);
    }

    int daysInMonth;

    switch (month)
    {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMonth = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break;
    case 2:

        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
        {
            daysInMonth = 29;
        }
        else
        {
            daysInMonth = 28;
        }
        break;
    default:
        printf("Invalid month: %d\n", month);
    }

    if (day < 1 || day > daysInMonth)
    {
        printf("Invalid day: %d for month %d in year %d\n", day, month, year);
    }
    else
    {
        printf("Yes, this is a valid date: %d-%02d-%02d\n", year, month, day);
    }

    return 0;
}
