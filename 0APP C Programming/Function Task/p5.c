
// int TotalOccur(char str[],char ele,int fromIndex,int ToIndex);
// return total occurence of ele in str in between from index to last index

#include <stdio.h>
int TotalOccur(char str[], char ele)
{
    int i;
    int fromIndex;
    int count=0;
    for (i = fromIndex; str != '\0'; i++)
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
    char str1[100];
    char ch;
    printf("Enter first String : ");
    gets(str1);

    printf("Enter sub String : ");
    scanf("%c", &ch);
    char result = TotalOccur(str1, ch);
    printf("%d", result);
}