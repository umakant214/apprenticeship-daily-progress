#include <stdio.h>
void main()
{
    int s;
    printf("Enter side of cube");
    scanf("%d ", &s);

    int volume = s * s * s;

    printf("valume of cube is %d", volume);
}