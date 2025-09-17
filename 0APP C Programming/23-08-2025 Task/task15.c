#include <stdio.h>
void main()
{
    // write a program to input a number and check if it lies in exactly one of the two ranges :10-20 to 30-40.
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    if ((num >= 10 && num <= 20) || (num >= 30 && num <= 40))
    {
        printf("The number %d lies in  specified ranges.\n", num);
    }
    else
    {
        printf("The number %d does not lie in  specified ranges.\n", num);
    }
}