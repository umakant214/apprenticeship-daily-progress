//lastIndex
#include <stdio.h>
int TotalOccur(char str[], char ele)
{
    int i;
    int fromIndex;
    int count = 0;
    for (i = 0; str != '\0'; i++)
    {
        if (str[i] == ele)
        {
            count++;
        }
    }
    return count;
}

void main()
{
}

//WAP to find occurence of each character in a string