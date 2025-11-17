// WAP to calculate NCR value
// input user = > n=? , r=?
// n!/(r!*(n-r)!)
#include <stdio.h>
void main()
{
    int n, r, factn = 1, factr = 1, factofnr = 1;
    printf("Enter value of n : ");
    scanf("%d", &n);

    printf("Enter value of r: ");
    scanf("%d", &r);

    for (int i = 1; i <= n; i++)
    {
        factn = factn * i;
    }
    printf("Factorial of n : %d\n", factn);

    for (int i = 1; i <= r; i++)
    {
        factr = factr * i;
    }
    printf("FActorial of r : %d\n", factr);

    for (int i = 1; i <= n - r; i++)
    {
        factofnr = factofnr * i;
    }
    printf("Factorial of n-r =%d\n", factofnr);

    int cal = (factn / (factr * factofnr));

    printf("NCR = %d \n", cal);
}