#include <stdio.h>
void main()
{
    int age;
    printf("Enter your age : %d");
    scanf("%d", &age);

    if (age > 18)
    {
        printf("You are eligible for vote ");
    }
    else
    {
        printf("You are not eligible for vote");
    }
}