#include <stdio.h>
void main()
{
    // WAP to input your name and and printf total number of uppercase and lowercase letter
    char name[50];
    int upper = 0, lower = 0;
    printf("Enter your name :");
    gets(name);

    for (int i = 0; name[i] != '\0'; i++)
    {
        if (name[i] >= 'a' && name[i] <= 'z')
        {

            lower++;
        }
        else if (name[i] >= 'A' && name[i] <= 'Z')
        {
            upper++;
        }
    }
    printf("upper =%d lower=%d", upper++, lower++);
}