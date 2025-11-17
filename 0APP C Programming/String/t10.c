// string equal to or not equal to
#include <stdio.h>
void main()
{
    char str1[50];
    char str2[50];
    int flag = 0;
    printf("ENter first string :");
    gets(str1);
    printf("Enter second string :");
    gets(str2);

    for (int i = 0; str1[i] != '\0' && str2[i] != '\0'; i++)
    {
        if (str1[i] != str2[i])
        {

            flag = 1;
            break;
        }
    }
    if (flag == 1)
    {
        printf("string not equal");
    }
    else
    {
        printf("string equal");
    }
}