// WAP to search a sub-string in a string

#include <stdio.h>
#include <string.h>

void main()
{
    char str1[100];
    char str2[100];
    int i, j, flag = 0;

    printf("Enter a string: ");
    gets(str1);
    printf("Enter a substring: ");
    gets(str2);
    for (i = 0; str1[i] != '\0'; i++)
    {
        for (j = 0; str2[j] != '\0'; j++)
        {
            if (str1[i + j] != str2[j])
            {
                break;
            }
        }
        if (str2[j] == '\0')
        {
            flag = 1;
            break;
        }
    }

    if (flag == 1)
        printf("Substring found\n");
    else
        printf("Substring not found\n");
}
