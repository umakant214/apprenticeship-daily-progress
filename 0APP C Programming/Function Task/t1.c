////Create a program in c to print length of each word in a string

#include <stdio.h>

void main()
{
    char str[200];
    int i, count = 0;

    printf("Enter a string: ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] != ' ' && str[i] != '\t')
        {
            count++; 
        }
        else
        {
            if (count > 0)
            {
                printf("Word length = %d\n", count);
                count = 0; 
            }
        }
    }


    if (count > 0)
    {
        printf("Word length = %d\n", count);
    }
}
