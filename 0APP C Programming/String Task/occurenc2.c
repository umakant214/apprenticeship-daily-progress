// WAP to print last occurence of a charater in a string . if not present return -1

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

    int index = -1;
    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == ele)
        {
            index = i;
        }
    }
    if (str[i] == '\0')
    {
        printf("%d ", index);
    }
}