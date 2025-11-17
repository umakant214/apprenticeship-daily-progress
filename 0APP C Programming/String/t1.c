// WAP to input your name and find the total characters in the name
#include <stdio.h>
#include <string.h>
void main()
{
    char name[50];
    int count = 0;
    printf("Enter your name :");
    gets(name); /// input name
    printf("Your name is %s\n", name);

    // find total character
    for (int i = 0; name[i] != '\0'; i++) // read every character of string
    {
        count++;
    }
    printf("%d", count);
}