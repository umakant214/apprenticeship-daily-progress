// Create an UDF to calculate factorial
#include <stdio.h>
int factorial(int n)
{
    int i, fact = 1;
    for (i = 1; i <= n; i++)
    {
        fact = fact * i;
    }
    return fact;
}
void main()
{
    int num;
    printf("Enter a num :");
    scanf("%d", &num);
    int result = factorial(num);
    printf("Factorial of this num = %d", result);
}