// WAP to input 2 string and check both string or equal or not
//(ignore the case like techpile=TECHPILE)
// string equal to or not equal to
// #include <stdio.h>
// void main()
// {
//     char str1[50];
//     char str2[50];
//     int flag = 0;
//     printf("ENter first string :");
//     gets(str1);
//     printf("Enter second string :");
//     gets(str2);

//     for (int i = 0; str1[i] != '\0' && str2[i] != '\0'; i++)
//     {
//         if (str1[i] != str2[i])
//         {

//             flag = 1;
//             break;
//         }
//     }
//     if (flag == 1)
//     {
//         printf("string not equal");
//     }
//     else
//     {
//         printf("string equal");
//     }
// }

#include <stdio.h>

int main()
{
    char str1[50];
    char str2[50];
    int i, flag = 0;

    printf("Enter first string: ");
    gets(str1);

    printf("Enter second string: ");
    gets(str2);

    for (i = 0; str1[i] != '\0' && str2[i] != '\0'; i++)
    {

        char ch1 = str1[i];
        char ch2 = str2[i];

        // convert ch1 to lowercase if it is uppercase
        if (ch1 >= 'A' && ch1 <= 'Z')
        {
            ch1 = ch1 + 32;
        }

        // convert ch2 to lowercase if it is uppercase
        if (ch2 >= 'A' && ch2 <= 'Z')
        {
            ch2 = ch2 + 32;
        }

        if (ch1 != ch2)
        {
            flag = 1;
            break;
        }
    }

       if (str1[i] != str2[i])
    {
        flag = 1;
    }

    if (flag == 0)
    {
        printf("Strings are equal \n");
    }
    else
    {
        printf("Strings are NOT equal\n");
    }
}
