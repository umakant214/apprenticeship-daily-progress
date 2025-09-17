#include <stdio.h>
void main()
{
    char ch;

    switch (ch)
    {
    case 'm':
    case 'M':
        printf(" You are Male");
        break;

    case 'f':
    case 'F':
        printf(" You are Female");
        break;

    default:
        break;
    }
}