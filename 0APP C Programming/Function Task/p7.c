#include <stdio.h>

void main()
{

    char str[100],ustr[100];
    char ch;
    int i, j, count = 1;

    printf("Enter a string: ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        //check str[i] is present in ustr or not
        for (j = i + 1; str[j] != '\0'; j++)
        {
            count = 1;
            if (str[i] == str[j])
            {
                count++;
            }
        }
        printf("%c = %d\n", str[i],  count);

        //store str[i] into ustr
    }
}
