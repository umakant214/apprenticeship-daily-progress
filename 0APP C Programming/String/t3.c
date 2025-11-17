#include <stdio.h>
void main()
{
    // WAP to input your name and print every character of name in new lines
    char name[50];
    printf("Enter your name :");
    gets(name);

    for (int i = 0; name[i] != '\0'; i++)
    {
        printf("%c \n", name[i]);
    }
}