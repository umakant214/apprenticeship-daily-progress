//WAP to print table of given number
#include <stdio.h>
void main()
{
    int num, i, table;
    printf("Enter a number for table :");
    scanf("%d", &num);
    for (i = 1; i <= 10; i++)
    {
        table = num * i;
        printf("%d\n", table);
    }
}