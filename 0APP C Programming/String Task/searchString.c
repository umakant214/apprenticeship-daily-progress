// Searching of character is

#include <stdio.h>
void main()
{
    char str[100];
    char ele;
    int i;
    printf("Enter a string ");
    gets(str);
    printf("Search element ");
    scanf("%c", &ele);

    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == ele)
        {
            printf("element found");
            break;
        }
    }
    if (str[i] == '\0')
    {
        printf("Element not found ");
    }
}