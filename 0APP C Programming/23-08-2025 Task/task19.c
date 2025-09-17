#include <stdio.h>

int main()
{
    float weight, height, BMI;

    printf("Enter weight (in kg): ");
    scanf("%f", &weight);

    printf("Enter height (in meters): ");
    scanf("%f", &height);

    if (height <= 0)
    {
        printf("Height must be greater than 0.\n");
        return 1;
    }

    BMI = weight / (height * height);

    printf("Your BMI is: %.2f\n", BMI);

    if (BMI < 25)
    {
        printf("You are underweight.\n");
    }
    else if (BMI >= 25 && BMI < 50)
    {
        printf("You have a normal weight.\n");
    }
    else if (BMI >= 50)
    {
        printf("You are overweight.\n");
    }
    else
    {
        printf("You are obese.\n");
    }

    return 0;
}
