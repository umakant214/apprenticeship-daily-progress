// Enter mobile number and check mob number  is a valid email or not

#include <stdio.h>

int main()
{
    char mobile[20];
    int i, len = 0, flag = 0;

    printf("Enter your mobile number: ");
    gets(mobile);

    for (i = 0; mobile[i] != '\0' && mobile[i] != '\n'; i++)
    {
        len++;

        if (!(mobile[i] >= '0' && mobile[i] <= '9'))
        {
            flag = 1;
            break;
        }
    }

    if (len == 10 && flag == 0)
    {
        printf("%s is a valid mobile number\n", mobile);
    }
    else
    {
        printf("%s is NOT a valid mobile number\n", mobile);
    }
}
