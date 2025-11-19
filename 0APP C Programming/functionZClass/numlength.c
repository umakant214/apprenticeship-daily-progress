// int Numlength(int n)
#include <stdio.h>

int Numlength(int n)
{
    int count = 0;
    for (int i = n; n > 0; n / 10)
    {
        count++;
    }
    return count;
}
void main()
{
    int num;
    printf("Enter a number ");
    scanf("%d", &num);
    int result = Numlength(num);
    printf("%d", result);
}