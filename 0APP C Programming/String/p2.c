// WAP to input email and store in memory
#include <stdio.h>
#include <string.h>
void main()
{
    char email[100];
    printf("Enter your Email : ");
    // gets(email);
    scanf("your email = %s", email);
    printf("Your Email is %s", email);
    // puts(email); // puts is string output but one string
}