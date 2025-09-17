#include <stdio.h>
void main()
{
    int age;
    printf("Enter your age :");
    scanf("%d", &age);

    if (age >= 13 && age <= 18)
    {
        printf("you are teenager");
    }
    else
    {
        printf("you are not teenager");
    }
}