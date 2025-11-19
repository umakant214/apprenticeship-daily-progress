// WAP to convert a string  into uppercase string
#include <stdio.h>
void main()
{
    char str[100];
    int i;
    printf("Enter a String : ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            str[i] = str[i] - 32;
        }
    }
    printf("uppercase = %s", str);
}