#include <stdio.h>
int main()
{
    int speed;

    printf("Enter Speed :");
    scanf("%d", &speed);

    if (speed < 80)
    {
        printf("you are safe limits : %d", speed);
    }
    else if (speed < 80 && speed >= 100)
    {
        printf("Warning ! you speed is hight :%d", speed);
    }
    else if (speed > 100)
    {
        printf("you should be fined :%d", speed);
    }
    else
    {
        printf("happy jurnery");
    }
}