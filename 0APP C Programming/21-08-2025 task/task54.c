#include <stdio.h>
void main()
{
    int english, hindi, math, social, science;
    printf("Enter english marks :");
    scanf("%d", &english);

    printf("Enter hindi marks :");
    scanf("%d", &hindi);

    printf("Enter math marks :");
    scanf("%d", &math);

    printf("Enter social marks :");
    scanf("%d", &social);

    printf("Enter science marks :");
    scanf("%d", &science);

    int totalsum = english + hindi + math + social + science;

    printf("total marks : %d \n", totalsum);

    float percent = (totalsum * 100) / 500;

    printf("total percent : %f", percent);
}