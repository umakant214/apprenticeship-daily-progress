// Create an UDF to calculate factorial
//no return tpe with parameter
#include <stdio.h>
void factorial(int n)
{
    int i, fact = 1;
    for (i = 1; i <= n; i++)
    {
        fact = fact * i;
    }
    printf(" fact= %d", fact);
}
void main()
{
    int num;
    printf("Enter a num :");
    scanf("%d", &num);
    factorial(num);
}