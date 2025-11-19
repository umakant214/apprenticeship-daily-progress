// Create an UDF to return average of 3 values
#include <stdio.h>
float Average(float a, float b, float c)
{
    return (a + b + c) / 3;
}

void main()
{
    float avg = Average(1.2, 3.4, 5.3);
    printf("%lf", avg);
}