// WAP to search a sub-string in a string and print at which index last time staring found and printf how many times string found

// WAP to search a sub-string in a string and print at which index last time string found and how many times string found
#include <stdio.h>
#include <string.h>

void main()
{
    char str1[100];
    char str2[100];
    int i, j;
    int count = 0;      // to count total matches
    int lastIndex = -1; // to store last found index

    printf("Enter a string: ");
    gets(str1);

    printf("Enter a sub string: ");
    gets(str2);

    for (i = 0; str1[i] != '\0'; i++)
    {
        for (j = 0; str2[j] != '\0'; j++)
        {
            if (str1[i + j] != str2[j])
                break;
        }

        if (str2[j] == '\0')
        {
            count++;       // increase match count
            lastIndex = i; // update last index
        }
    }

    if (count > 0)
    {
        printf("Substring found %d times\n", count);
        printf("Last time substring found at index %d\n", lastIndex);
    }
    else
    {
        printf("Substring not found\n");
    }
}
