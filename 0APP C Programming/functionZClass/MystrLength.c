// int MyStrLength(char str[])
#include <stdio.h>
int MyStrLength(char str[])
{
    int i, count = 0;
    for (i = 0; str[i] != '\0'; i++)
    {
        count++;
    }
    return count;
}
void main()
{
    char str1[100];
    printf("Enter a String :");
    gets(str1);
    int length = MyStrLength(str1);
    printf("%d", length);
}