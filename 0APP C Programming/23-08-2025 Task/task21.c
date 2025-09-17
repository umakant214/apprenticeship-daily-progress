// Write a program to input a lowercase string and check whether its characters are in alphabetical order.
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int i, isAlphabetical = 1;

    printf("Enter a lowercase string: ");
    scanf("%s", str);

    for (i = 0; i < strlen(str) - 1; i++)
    {
        if (str[i] > str[i + 1])
        {
            isAlphabetical = 0;
            break;
        }
    }

    if (isAlphabetical)
    {
        printf("The characters are in alphabetical order.\n");
    }
    else
    {
        printf("The characters are not in alphabetical order.\n");
    }

    return 0;
}