#include <stdio.h>
void main()
{
    int en, hi, math, social, science;
    printf("Enter English marks :");
    scanf("%d", &en);

    printf("Enter Hindi marks :");
    scanf("%d", &hi);

    printf("Enter Math marks :");
    scanf("%d", &math);

    printf("Enter Social marks :");
    scanf("%d", &social);

    printf("Enter Science marks :");
    scanf("%d", &science);

    if (en >= 40 && hi >= 40 && math >= 40 && social >= 40 && science >= 40)
    {
        printf("You are passed in all subjects");
    }
    else
    {
        printf("You are  not passed in all subjects");
    }
}