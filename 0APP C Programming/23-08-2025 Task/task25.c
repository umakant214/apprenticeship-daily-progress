// write a program to input a persons ages ,heigth and fitness score and check wheather they are eligible for a sports try out
#include <stdio.h>
int main()
{
    int age, height, fitness;
    printf("Enter a age :");
    scanf("%d", &age);
    printf("Enter a height :");
    scanf("%d", &height);
    printf("Enter a fitness score :");
    scanf("%d", &fitness);
    if (age >= 18 && height >= 160 && fitness >= 50)
    {
        printf("You are eligible for the sports try out.\n");
    }
    else
    {
        printf("You are not eligible for the sports try out.\n");
    }
    return 0;
}