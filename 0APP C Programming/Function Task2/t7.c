//// WAP to find occurence of each character in a string

// int IsFound(char str[], char ele);
// return 1 if ele is found in str, return 0 if not found

#include <stdio.h>
int IsFound(char str[], char ele)
{
    int i;
    for (i = 0; str != '\0'; i++)
    {
        if (str[i] == ele)
        {
            return 1;
            break;
        }
    }
    if (str[i] == '\0')
    {
        return 0;
    }
}

void main()
{
    char str1[100];
    char ch;
    printf("Enter first String : ");
    gets(str1);

    printf("Enter sub String : ");
    scanf("%c", &ch);
    char result = IsFound(str1, ch);
    printf("%d", result);
}