#include <stdio.h>
#include <string.h>

int main()
{
    char username[20];
    char password[20];

    printf("Enter your username: ");
    scanf("%s", username);

    printf("Enter your password: ");
    scanf("%s", password);

    if (strcmp(username, "Techpile") == 0 && strcmp(password, "123") == 0)
    {
        printf("You are logged in successfully.\n");
    }
    else
    {
        printf("Incorrect username or password.\n");
    }

    return 0;
}
