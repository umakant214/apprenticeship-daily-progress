// return type and no parameter
#include <stdio.h>
int MyFun()
{
    int a = 10;
    int b = 23;
    printf("sum=%d\n", a + b);
    return 10;
}
void main()
{
    int result = MyFun() + 30;
    printf("%d", result);
}