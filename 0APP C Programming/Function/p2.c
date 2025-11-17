// No return type with parameter
#include <stdio.h>

void PrintMsg(char name[])
{
    printf("Hello %s", name);
}
void main()
{
    PrintMsg("abhi");
}