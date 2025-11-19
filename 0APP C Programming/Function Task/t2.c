////Create a program in c to find largest word in a string
#include <stdio.h>

void main()
{
    char str[200];
    int i, len = 0, maxLen = 0, start = 0, maxStart = 0;

    printf("Enter a string: ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] != ' ')
        {
            len++; // count characters
        }
        else
        {
            if (len > maxLen)
            {
                maxLen = len;
                maxStart = start;
            }
            len = 0;       
            start = i + 1; 
        }
    }

   
    if (len > maxLen)
    {
        maxLen = len;
        maxStart = start;
    }


    printf("Largest word: ");
    for (i = maxStart; i < maxStart + maxLen; i++)
        printf("%c", str[i]);

    printf("\nLength = %d\n", maxLen);
}
