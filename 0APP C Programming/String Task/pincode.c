// Enter pincode number and check pincode  number  is a valid  or not
// Must be 6 digits
// Only 0–9 digits
// No letters, no spaces, no symbols
#include <stdio.h>

int main()
{
    char pincode[20];
    int i, len = 0, flag = 0;

    printf("Enter your pincode: ");
    gets(pincode);

    // check each character
    for (i = 0; pincode[i] != '\0' && pincode[i] != '\n'; i++)
    {
        len++;

        // check if character is not a digit
        if (!(pincode[i] >= '0' && pincode[i] <= '9'))
        {
            flag = 1; // invalid character found
            break;
        }
    }

    // final validation
    if (len == 6 && flag == 0)
    {
        printf("%s is a valid pincode\n", pincode);
    }
    else
    {
        printf("%s is not a valid pincode\n", pincode);
    }
}
