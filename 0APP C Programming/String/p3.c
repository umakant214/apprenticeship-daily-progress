#include <stdio.h>
void main()
{
    char name[20];
    name[0] = 'A';
    name[1] = 'B';
    name[2] = '\0'; //terminate 
    printf("Name = %s", name);
}