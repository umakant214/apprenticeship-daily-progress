// void square(int n)

#include <stdio.h>
void square(int n)
{
    int square = n * n;
    printf(" square = %d", square);
}

void main()
{
    int num;
    printf("ENter a number : ");
    scanf("%d", &num);
    square(num);
}