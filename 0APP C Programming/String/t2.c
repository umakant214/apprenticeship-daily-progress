// WAP to input your name and print every character of name in new lines
#include <stdio.h>
#include <string.h>
void main()
{
    char name[50];
    int i, count = 0;
    printf("Enter your name :");
    gets(name);
    printf("your name is %s \n", name);

    for (i = 0; name[i] != '\0'; i++)
    {
        count++;
    }
    printf("%s \n", name[i]);
}