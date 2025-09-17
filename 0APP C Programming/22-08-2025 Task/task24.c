#include <stdio.h>
void main()
{
    int age;
    printf("Enter your age :");
    scanf("%d", &age);

    if (age >= 60)
    {
        printf("You are senior citizen");
    }
    else
    {
        printf("You are not a senoir citizen");
    }
}