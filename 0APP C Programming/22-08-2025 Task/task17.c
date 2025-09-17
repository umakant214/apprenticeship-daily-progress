#include <stdio.h>
void main()
{
    char alphabets;
    printf("Enter charater :");
    scanf("%c", &alphabets);

    if (alphabets == 'a' || alphabets == 'e' || alphabets == 'i' || alphabets == 'o' || alphabets == 'u')
    {
        printf("Your input is vowel : %c ", alphabets);
    }
    else
    {
        printf("your input is not a vowel : %c", alphabets);
    }
}