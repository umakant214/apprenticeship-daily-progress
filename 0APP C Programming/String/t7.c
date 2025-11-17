// WAP to input your name and convert string into uppercase
#include <stdio.h>
#include <string.h>
void main()
{
    char name[50];
    printf("Enter your name: ");
    gets(name);

    for (int i = 0; name[i] != '\0'; i++)
    {
        if (name[i] >= 'a' && name[i] <= 'z')
        {
            name[i] = name[i] - 32; // convert to uppercase
        }
    }

    printf("Uppercase = %s", name);
}
