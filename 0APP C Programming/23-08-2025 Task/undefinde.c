#include<stdio.h>
void main(){
    int num;
    printf("Enter a number :");
    scanf("%d",&num);

    if (num<1 && num>=10)
    {
        printf("You are lowest score");
    }else if (num>=10 && num<20)
    {
        printf("you are passed with lowest number");
    } else if (num<30 && num>20)
    {
        printf("You are passed with 30 percent :");

    }else if (num>=30 && num<40)
    {
        printf("your are passed with 40 percent");
    }
    
    
    
    
}