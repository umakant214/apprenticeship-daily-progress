// write a program  to input time in 24 hour format and convert it to 12 hour format with AM/PM

#include <stdio.h>
#include <string.h>

int main()
{
    int hour, minute;
    printf("Enter time in 24-hour format (HH MM): ");
    scanf("%d %d", &hour, &minute);

    if (hour < 0 || hour > 23 || minute < 0 || minute > 59)
    {
        printf("Invalid time input.\n");
    }

    char period[3];
    if (hour >= 12)
    {
        strcmp(period, "PM");
    }
    else
    {
        strcmp(period, "AM");
    }
    int hour12 = hour % 12;
    if (hour12 == 0)
    {
        hour12 = 12;
    }

    printf("Time in 12-hour format: %02d:%02d %s\n", hour12, minute, period);
}
