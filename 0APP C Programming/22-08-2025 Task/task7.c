#include <stdio.h>
void main()
{
    int marks;
    printf("Enter you marks :");
    scanf("%d", &marks);
    if (marks >= 40)
    {
        printf("you are passed ");
    }
    else
    {
        printf("you are failed");
    }
}