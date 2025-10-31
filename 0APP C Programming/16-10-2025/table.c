// 2 table  multiply
// #include <stdio.h>
// void main()
// {
//     unsigned long mul = 1;
//     for (int i = 2; i <= 20; i = i + 2)
//     {
//         mul = mul * i;
//     }
//     printf("Multiply of 2 table number :%lu", mul);
// }

#include <stdio.h>

void main()
{
    int n, i;
    printf("Enter a number: ");
    scanf("%d", &n);

    for (i = 1; i <= 10; i++)
    {
        int result = n * i;
        printf("%d\n", result);
    }
}
