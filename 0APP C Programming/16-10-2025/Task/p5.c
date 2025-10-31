// WAP to input 10 numbers from user and counter total positive ,negative and 0

#include <stdio.h>
void main()
{
    int n, cp = 0, cn = 0, cz = 0;
    printf("Enter 10 number : ");
    for (int i = 1; i <= 10; i = i + 1)
    {
        scanf("%d", &n);
        if (n > 0)
        {
            cp++;
        }
        else if (n < 0)
        {
            cn++;
        }
        else if (n == 0)
        {
            cz++;
        }
    }
    printf("%d positive number \n  %d negative number \n %d negative number \n", cp, cn, cz);
}