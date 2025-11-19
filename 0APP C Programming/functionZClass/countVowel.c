// WAP to input string and count:
//  how many vowels are present in string
#include <stdio.h>
void main()
{
    char str[100];
    int i, count = 0;
    printf("Enter a String : ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == 'a' || str[i] == 'A' || str[i] == 'e' || str[i] == 'E' || str[i] == 'i' || str[i] == 'I' || str[i] == 'o' || str[i] == 'O' || str[i] == 'u' || str[i] == 'U')
        {
            count++;
        }
    }

    printf("vowels= %d", count);
}