// WAP to store your marks of 12th in an array and find the total marks
#include <stdio.h>
void main()
{
    int marks[5];
    int i, total = 0;
    int avg;
    for (i = 0; i <= 4; i++)
    {
        scanf("%d", &marks[i]);
    }
    // int total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
    // printf("total= %d", total);

    for (i = 0; i <= 4; i++)
    {
        total = total + marks[i];
    }

    printf("total= %d ", total);
    avg = total / 5;
    printf("avg= %d ", avg);
}