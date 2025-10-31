// WAP to input a number and printf number of digit in the number
#include <stdio.h>
void main()
{
    int num, count = 0;
    printf("Enter :");
    scanf("%d", &num);
    for (; num > 0; num = num / 10)
    {
        count++;
    }
    printf("%d\n", count);
}

// #include <stdio.h>
// void main()
// {
//     int num, count = 0;
//     printf("Enter a number: ");
//     scanf("%d", &num);

//     if (num == 0)
//     {
//         count = 1;
//     }
//     else
//     {
//         for (; num > 0; num = num / 10)
//         {
//             count++;
//         }
//     }

//     printf("Number of digits: %d\n", count);
// }
