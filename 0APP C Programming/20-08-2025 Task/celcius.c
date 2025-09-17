#include <stdio.h>
int main() {
    float fahrenheit, celsius;
    printf("Enter temperature in Fahrenheit: ");
    scanf("%f", &fahrenheit);
    celsius = (fahrenheit - 32) * 5.0 / 9.0;
    printf("Temperature in Celsius: %f\n", celsius);

    return 0;
}

