#include <stdio.h>

void main()
{

    // WAP to input string and find how many times agiven character is present in string
    char str[100];
    char ch;
    int i, count = 0;

    printf("Enter a string: ");
    gets(str);

    printf("Enter a character to search: ");
    scanf("%c", &ch);

    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == ch)
        {
            count++;
        }
    }

    printf("%d times",  count);
}
