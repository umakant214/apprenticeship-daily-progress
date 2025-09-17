#include<stdio.h>
void main(){
	//wap to input a four digit number and find sum of cube of digits
	int num;
	printf("Enter 4 digit number :");
	scanf("%d",&num);
	int cube=num*num*num;
	
	printf("number = %d \n cube = %d ",num,cube);
	int d1=cube%10;
	cube=cube/10;
	
	
	int d2=cube%10;
    cube=cube/10;
	
	int d3=cube%10;
   cube=cube/10;
	
	int d4=cube%10;
	 cube=cube/10;
	
	int d5=cube%10;
	 cube=cube/10;
	
	int d6=cube%10;
	 cube=cube/10;
	
	int d7=cube%10;
	cube=cube/10;
	
	int d8=cube%10;
    cube=cube/10;
	
	int d9=cube%10;
    cube=cube/10;
	
	int d10=cube%10;
    cube=cube/10;
	
	int sum=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10;
	printf("cube of number of sum: %d",sum);
}
