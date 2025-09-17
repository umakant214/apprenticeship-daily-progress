// write a program to input three angles and check whether they form a valid triangle and if so what type (acute, right, obtuse)
#include <stdio.h>
int main()
{
    int angle1, angle2, angle3;
    printf("Enter three angles: ");
    scanf("%d %d %d", &angle1, &angle2, &angle3);

    if (angle1 + angle2 + angle3 == 180)
    {
        printf("The angles form a valid triangle.\n");
        if (angle1 < 90 && angle2 < 90 && angle3 < 90)
        {
            printf("The triangle is acute.\n");
        }
        else if (angle1 == 90 || angle2 == 90 || angle3 == 90)
        {
            printf("The triangle is right.\n");
        }
        else
        {
            printf("The triangle is obtuse.\n");
        }
    }
    else
    {
        printf("The angles do not form a valid triangle.\n");
    }
}