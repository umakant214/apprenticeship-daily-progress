// WAP to input a string and create a new string store only vowel
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
        if (str[i] == 'a' || str[i] == 'A' || str[i] == 'e' || str[i] == 'E' || str[i] == 'i' || str[i] == 'I' || str[i] == 'o' || str[i] == 'O' || str[i] == 'u' || str[i] == 'U')
        {
            newStr[index] = str[i];
            index++;
        }
    }
    newStr[index] = '\0';
    printf("vowel = %s", newStr);
}