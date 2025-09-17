#include <stdio.h>
void main()
{
    int std1, std2;
    printf("Enter first student marks :");
    scanf("%d", &std1);

    printf("Enter second student marks :");
    scanf("%d", &std2);
    if (std1 >= std2)
    {
        printf("First student is higher score ");
    }
    else if (std2 >= std1)
    {
        printf("Second student is higher score");
    }
}