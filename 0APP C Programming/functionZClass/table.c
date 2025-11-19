// void PrintTable(int n)
#include <stdio.h>
void PrintTable(int n)
{
    for (int i = 1; i <= 10; i++)
    {
        int table = n * i;
        printf("%d\n", table);
    }
}
void main()
{
    int num;
    printf("Enter a number to print table : ");
    scanf("%d", &num);
    PrintTable(num);
}