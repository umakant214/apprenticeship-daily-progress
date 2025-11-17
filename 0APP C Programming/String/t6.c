#include <stdio.h>
void main()
{
    // and check email is a valid email or not :
    // a string that only have alphabets
    // a string that is more than 2 lenght
    char email[50];
    int i, len = 0;
    int flag = 0;
    printf("Enter your email ...");
    gets(email);
    for (i = 0; email[i] != '\0'; i++)
    {
        len++;

        if (!((email[i] >= 'a' && email[i] <= 'z') || (email[i] >= '@') || email[i] >= '.'))
        {
            flag = 1;
            break;
        }
    }
    // printf("length =%d");
    if (len > 12 && flag == 0)
    {
        printf("%s is valid email", email);
    }
    else
    {
        printf("%s is not valid email ", email);
    }
}