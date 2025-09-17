#include <stdio.h>
int main() {
    int a, b, c;

    printf("Enter three sides of a triangle: ");
    scanf("%d %d %d", &a, &b, &c);

    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        printf("The sides form a VALID triangle.\n");
    } else {
        printf("The sides CANNOT form a triangle.\n");
    }

    return 0;
}