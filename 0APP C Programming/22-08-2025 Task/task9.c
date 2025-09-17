#include <stdio.h>
#include <conio.h>
void main()
{

    char var;
    printf("Enter a lowercase  charater :");
    scanf("%c", &var);

    var = getchar();
    char uc = var - 32;
    // a(97-32) - A (65)
    // b(98-32) - B(66)
    putchar(uc);
}