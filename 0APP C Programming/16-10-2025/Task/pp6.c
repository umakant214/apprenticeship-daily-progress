// WAp to input 10 numbers from user and count total even or odd

#include <stdio.h>
void main()
{
    int n, even = 0, odd = 0;
    printf("Enter a number which check even or odd :");
    for (int i = 1; i <= 10; i = i + 1)
    {
        scanf("%d", &n);
        if (n % 2 == 0)
        {
            even++;
        }
        else if (n % 2 != 0)
        {
            odd++;
        }
    }
    printf("%d even number \n %d odd number", even, odd);
}