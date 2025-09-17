#include <stdio.h>
int main()
{
    char alphabet;
    printf("Enter an alphabet:");
    scanf("%c", &alphabet);
    if (alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u')
    {
        printf("The alphabet %c is a vowel.\n", alphabet);
    }
    else
    {
        printf("The alphabet %c is a consonant.\n", alphabet);
    }
}