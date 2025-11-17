// WAP to input your name and store in memory
#include <stdio.h>
#include <string.h>
void main()
{
    char name[20];
    printf("Enter your name :");
    gets(name);
    printf("Welcome %s !", name);
}