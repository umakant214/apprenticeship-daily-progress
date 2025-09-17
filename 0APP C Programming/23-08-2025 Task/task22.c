#include <stdio.h>

int main()
{
    int age;
    int fare, fullfare = 100;

    printf("Enter your age: ");
    scanf("%d", &age);

    if (age < 12)
    {
        fare = fullfare / 2;
        printf("Child fare: %d\n", fare);
    }
    else if (age >= 70)
    {
        fare = fullfare * 70 / 100;
        printf("Senior citizen fare: %d\n", fare);
    }
    else
    {
        printf("Regular fare: %d\n", fullfare);
    }

    return 0;
}
