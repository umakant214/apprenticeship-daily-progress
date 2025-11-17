// convert in short name : ex name =aman kumar yadav
//  short name : a.k yadav
#include <stdio.h>
#include <string.h>
void main()
{
    char lname[50], sname[50];
    printf("Enter full name :");
    gets(lname);

    sname[0] = lname[0];
    sname[1] = '.';
    int j = 2, i, s = 0;
    for (i = 0; lname[i] != '\0'; i++)
    {
        if (lname[i] == ' ' && lname[i + 1] != ' ')
        {
            sname[j] = lname[i + 1];
            sname[j + 1] = '.';
            j = j + 2;
            // s = i;
        }
    }
    //loop from last index of space
    // for (i = s + 1; lname[i] != '\0'; i++)
    // {
    //     printf("%c", lname[i]);
    // }
    sname[j] = '\0';
    printf("short name = %s", sname);
}

/// email valid
// mob valid
//  pincode valid
// first string is larger or second string is larger
// WAP to input 2 string and check both string or equal or not
//(ignore the case like techpile=TECHPILE)
// WAp to input 2 string and check both string are equal or not till n number of character
// WAP to count how many words in a string start with lowercase character and how many from uppercase character and how many form digits and special symbols

// WAP to convert a string  into capitalize string (each word staart with uppercase letter and remaing character are lowercase)
// WAp to input string and  convert lowercase
// WAp to input a string ND FIND a given charater  is present string or not and find a given string is present in string or not
// WAP to input string and find how many times agiven character is present in string
// and find how many times a given string is present in string
// and find occurence of each charater in string
// amd find last index of a given character n string
// and find  first occurence ,last occurence and total occurence of a charater in a string