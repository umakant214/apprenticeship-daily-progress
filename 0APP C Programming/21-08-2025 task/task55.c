#include <stdio.h>
void main()
{
    int pcar;
    printf("Enter price of car :");
    scanf("%d", &pcar);
    int RTOcharge = pcar * 2.5 / 100;
    int insurence = RTOcharge * 120 / 100;
    int otherch = pcar * 1 / 100;
    int roadprice = pcar + RTOcharge + insurence + otherch;
    printf("on road price : %d", roadprice);
}