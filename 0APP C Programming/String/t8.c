// WAP to input a string and count total words
#include <stdio.h>
#include <string.h>
void main()
{
    char name[50];
    int count = 0;
    printf("Enter your name :");
    gets(name);

    for (int i = 0; name[i] != '\0'; i++)
    {
        if (name[i] == ' ' && name[i + 1] != ' ')
        {
            count++;
        }
    }
    // space count
    printf("number of space %d \n", count);

    // word count
    printf("number of words %d", count + 1);

    // character count
}