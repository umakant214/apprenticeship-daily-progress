#include <stdio.h>
void main()
{
    // direct - constant string
    // M1:
    // char name[100] = "Techpile";
    // printf(" String= %s", name);

    // M2:
    // char name[100] = {'t', 'e', 'p', 'i', 'l', 'e', '\0'};
    // printf("string= %s", name);

    // M3 :
    char name[100];
    name[0] = 't';
    name[1] = 'e';
    name[2] = 'p';
    name[3] = '\0';
    scanf("%s", name);
    printf("String = %s", name);
}