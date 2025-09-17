#include <stdio.h>
#include <math.h>
void main()
{
    // A=P(1+r/n)power n
    // ci=A-P

    int n, t;
    int A, P, r, CI;
    printf("Enter final amount :");
    scanf("%d", &A);

    printf("Enter principle amount :");
    scanf("%d", &P);

    printf("Enter Annual intrest rate amount :");
    scanf("%d", &r);
    printf("Enter number of time intrest is CI :");
    scanf("%d", &n);

    printf("Enter time of  year :");
    scanf("%d", &t);

    A = P * pow((1 + r / n), n * t);
    CI = A - P;
    printf("final amout %d ", A);
    printf("compound intrest %d", CI);
}