#include <stdio.h>
void main()
{

    char ch;

    printf("Enter a character :");
    scanf("%c", &ch);

    if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
    {
        printf("%c is an alphabates", ch);
    }
    else
    {
        printf("%c is not an alphabates ");
    }
}