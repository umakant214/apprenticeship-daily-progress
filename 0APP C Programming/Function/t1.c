// WAP to print greater number from 2 integer number
#include <stdio.h>
//no return and no parameter
void Greater()
{
    int a = 10;
    int b = 20;
    if (a < b)
    {
        printf("%d is greater\n", b);
    }
    else
    {
        printf("%d is greater\n ", a);
    }
}

//
int MyGreater()
{
    int a = 10;
    int b = 20;
    if (a < b)
    {
        return b;
    }
    else
    {
        return a;
    }
}

//
void Greaternum(int n1, int n2)
{
    if (n1 > n2)
    {
        printf("n1 is greater than\n");
    }
    else
    {
        printf("n2 is greater than\n");
    }
}
//
int Greaternum2(int n1, int n2)
{
    if (n1 > n2)
    {
        return n1;
    }
    else
    {
        return n2;
    }
}
void main()
{
    Greater();
    int re = MyGreater();
    printf("%d\n", re);
    Greaternum(2, 3);
    int result = Greaternum2(4, 5);
    printf("%d\n", result);
}