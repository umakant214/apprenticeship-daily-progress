#include <stdio.h>
void main()
{
    int temp;
    printf("Enter current tempreture :");
    scanf("%d", &temp);

    if (temp < 10 && temp > -10)
    {
        printf("Weather is cold");
    }
    else if (temp > 11 && temp <= 30)
    {
        printf("waether is normal");
    }
    else if (temp < 10)
    {
        printf("waether is freezing");
    }
    else if (temp > 30)
    {
        printf("waether is Hot");
    }
}