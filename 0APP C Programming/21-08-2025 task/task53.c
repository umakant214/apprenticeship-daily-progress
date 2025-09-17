#include <stdio.h>
void main()
{
    int di, time;
    printf("Enter distance in km :");
    scanf("%d", &di);

    printf("Enter time hours :");
    scanf("%d", &time);

    int calspeed = di / time;
    printf("total speed : %d", calspeed);
}