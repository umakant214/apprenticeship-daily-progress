#include <stdio.h>
#include <string.h>

int main()
{
    char day[20];

    printf("Enter a Day: ");
    scanf("%s", day);

    if (
        strcmp(day, "Monday") == 0 ||
        strcmp(day, "Tuesday") == 0 ||
        strcmp(day, "Wednesday") == 0 ||
        strcmp(day, "Thursday") == 0 ||
        strcmp(day, "Friday") == 0)
    {
        printf("%s is a weekday.\n", day);
    }
    else if (
        strcmp(day, "Saturday") == 0 ||
        strcmp(day, "Sunday") == 0)
    {
        printf("%s is a weekend day.\n", day);
    }
    else
    {
        printf("%s is not a valid day.\n", day);
    }

    return 0;
}
