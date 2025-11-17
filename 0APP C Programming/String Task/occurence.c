// WAP to check first occurence (index where element present first) of a character in a string . if not present return -1

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
            printf("%d", i);
           
            break;
        }
    }
    if (str[i] == '\0')
    {
        printf("-1 ");
    }

   
}