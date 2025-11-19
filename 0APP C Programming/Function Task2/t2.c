//Create a UDF to calculate 18% GST of a value
//float GST(int amount)
//Use this udf function

#include <stdio.h>

float GST(int amount) 
{
    return amount * 0.18;
}

void main()
{
    int amount;
    float gst, total;

    printf("Enter amount: ");
    scanf("%d", &amount);

    gst = GST(amount); 
    total = amount + gst;

    printf("GST  = %.2f\n", gst);
    printf("Total amount = %.2f\n", total);
}
