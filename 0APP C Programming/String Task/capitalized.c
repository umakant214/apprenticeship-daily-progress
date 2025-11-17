// WAP to convert a string  into capitalize string (each word staart with uppercase letter and remaing character are lowercase)

#include <stdio.h>

void main()
{
    char str[100];
    int i;

    printf("Enter a string: ");
    gets(str);

   
    if (str[0] >= 'a' && str[0] <= 'z')
    {
        str[0] = str[0] - 32;
    }
     
    
    for (i = 1; str[i] != '\0'; i++)
    {
        
        if (str[i - 1] == ' ')
        {
            if (str[i] >= 'a' && str[i] <= 'z')
                str[i] = str[i] - 32;
        }
        else
        {
          
            if (str[i] >= 'A' && str[i] <= 'Z')
                str[i] = str[i] + 32;
        }
    }

    printf("Capitalized String: %s", str);
}
