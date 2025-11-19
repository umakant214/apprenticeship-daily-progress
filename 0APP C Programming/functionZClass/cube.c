// long cube(int n)
#include <stdio.h>
long cube(int n)
{
    long cube = n * n * n;
    return cube;
}
void main()
{
    int num;
    printf("Enter a number : ");
    scanf("%d", &num);
    long result = cube(num);
    printf("cube = %d ", result);
}