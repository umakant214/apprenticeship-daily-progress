#include<stdio.h>
void main(){
	//wap to input a three digit number and find the reverse of number
	int num;
	printf("Enter 3 digit number :");
	scanf("%d",&num);
	
	int d1=num%10; //234 => 4
	num=num/10; //23.4 =>23
	 
	 int d2=num%10;  //23 => 3
	num=num/10; // 2.3 =>2
	
	printf("reverse digit :%d%d%d",d1,d2,num);
	
	 
}
