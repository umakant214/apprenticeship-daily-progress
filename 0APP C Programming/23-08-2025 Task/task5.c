#include <stdio.h>

void main()
{
    float v, r;
    printf("Enter radius of sphere :");
    scanf("%f", &r);
    float pi = 3.14;
    v = (4 / 3) * pi * (r * r * r);
    printf("volume of spere : %f", v);
}