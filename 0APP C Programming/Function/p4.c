// return type and parameterized
#include <stdio.h>

int Add(int a, int b)
{
    return a + b;
}
void main()
{
    int result = Add(2, 5);
    printf("%d", result + 20);
}