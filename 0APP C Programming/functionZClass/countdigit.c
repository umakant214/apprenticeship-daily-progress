// WAP to input string and count:
//  how many digits are present in string
#include <stdio.h>
void main()
{
    char str[100];
    int i, count = 0;
    printf("Enter a String : ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] >= "0" || str[i] <= '9')
        {
            count++;
        }
    }

    printf("digits= %d", count);
}