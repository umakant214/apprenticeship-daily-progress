#include <stdio.h>
void PrintMsg() // UDF - no return type and no parameter
{
    printf("Hii Coders !\n");
}
void main()
{
    // calling of UDF
    PrintMsg();

    for (int i = 0; i <= 10; i++)
    {
        PrintMsg();
    }
}