// digits of number
// WAP to input a number and
// find sum of digits
// find total number of digits
// find the number is armstrong number or not
// find reverse of the number
// check number is polindrome number or not
// find sum of square of digites
/// find total number of zeros present in number
/// WAP to find to check a number is perfect number or not  => 6=1,2,3=6 this is perfect num

//-----------------------------------
// find sum of digits
#include <stdio.h>
void main()
{
    int n, d;
    int sum = 0;
    printf("Enter a number :");
    scanf("%d", &n);
    // n%10=>last digit of n
    // n/10=>remove last digit
    for (; n > 0; n = n / 10)
    {
        d = n % 10;
        sum = sum + d;
    }
    printf("%d is the sum of digit :", sum);
}