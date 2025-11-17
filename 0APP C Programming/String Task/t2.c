// WAP to search a sub-string in a string and print at which index first time string found
#include <stdio.h>

void main()
{
    char str1[100];
    char str2[100];
    int i, j, flag = 0;

    printf("Enter a string: ");
    gets(str1);

    printf("Enter a sub string: ");
    gets(str2);

    for (i = 0; str1[i] != '\0'; i++)
    {
        for (j = 0; str2[j] != '\0'; j++)
        {
            if (str1[i + j] != str2[j])
                break;
        }
        if (str2[j] == '\0')
        {
            flag = 1;
            printf("Substring found at index %d\n", i);
            break;
        }
    }

    if (flag == 0)
    {
        printf("Substring not found\n");
    }
}
