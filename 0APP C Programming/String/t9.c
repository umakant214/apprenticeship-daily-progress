// and print your name in reverse order of charaters
#include <stdio.h>
void main()
{
    char name[50], count = 0;
    ;
    printf("Enter your name :");
    gets(name);

    for (int i = 0; name[i] != '\0'; i++)
    {
        count++;
    }
    for (int i = count; i >= 0; i--)
    {
        printf("%c", name[i]);
    }
}