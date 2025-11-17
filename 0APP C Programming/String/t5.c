#include <stdio.h>
void main()
{
    // and check name is a valid name or not :
    // a string that only have alphabets
    // a string that is more than 2 lenght
    char name[50];
    int i, len = 0;
    int flag = 0;
    printf("Enter your name ...");
    gets(name);
    for (i = 0; name[i] != '\0'; i++)
    {
        if (!((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') || name[i] == ' '))
        {
            len++;
        }
        if (!((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') || name[i] == ' '))
        {
            flag = 1;
            break;
        }
    }
    // printf("length =%d");
    if (len > 2 && flag == 0)
    {
        printf("%s is valid name", name);
    }
    else
    {
        printf("%s is not valid name ", name);
    }
}