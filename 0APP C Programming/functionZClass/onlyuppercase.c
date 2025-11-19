// WAP to input a string and create a new string store only uppercase alphbates

#include <stdio.h>
void main()
{
    char str[100];
    char newStr[100];
    int i, index = 0;
    printf("Enter a String : ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        if ( str[i] >= 'A' && str[i] <= 'Z')
        {
            newStr[index] = str[i];
            index++;
        }
    }
    newStr[index] = '\0';
    printf("%s", newStr);
}