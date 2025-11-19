// Create a UDF to get lenght of a string => Return type with parameter
#include <stdio.h>

int GetLength(char str[])
{
    int i, count = 0;

    for (i = 0; str[i] != '\0'; i++)
    {
        count++;
    }

    return count;
}

void main()
{
    char str[100];
    int len;

    printf("Enter a string: ");
    gets(str);

    len = GetLength(str);

    printf("Length of string = %d\n", len);
}
