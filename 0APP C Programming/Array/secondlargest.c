#include <stdio.h>

void main()
{
    int arr[10], i;
    printf("Enter 10 integer elements: ");
    for (i = 0; i < 10; i++)
    {
        scanf("%d", &arr[i]);
    }

    int largest, secondLargest;

    // Initialize largest and secondLargest
    if (arr[0] > arr[1])
    {
        largest = arr[0];
        secondLargest = arr[1];
    }
    else
    {
        largest = arr[1];
        secondLargest = arr[0];
    }

    
    for (i = 2; i < 10; i++)
    {
        if (arr[i] > largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != largest)
        {
            secondLargest = arr[i];
        }
    }

    printf("First largest number = %d\n", largest);
    printf("Second largest number = %d\n", secondLargest);
}
