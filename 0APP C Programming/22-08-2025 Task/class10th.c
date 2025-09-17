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

    int total = en + hi + math + social + science;
    int percent = (total * 100) / 500;

    if (percent >= 59 && percent <= 100)
    {
        printf("you are passed with 1st division ");
    }
    else if (percent >= 49 && percent <= 59)
    {
        printf("you are passed with 2nd division");
    }
    else if (percent >= 32 && percent <= 49)
    {
        printf("you are passed with 3rd division");
    }
    else if (percent >= 0 && percent <= 32)
    {
        printf("you are fail best of luck");
    }
    else
    {
        printf("you are typed invalid number");
    }
}