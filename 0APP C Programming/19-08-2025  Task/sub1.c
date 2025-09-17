#include<stdio.h>
void main(){
	float open ,totalwith;
	printf("Enter you opening balance :");
	scanf("%f",&open);
	printf("Enter your total withdrawal balance :");
	scanf("%f",&totalwith);
	float remaining_balance=open-totalwith;
	printf("your remaining balance : %f",remaining_balance);
	
	
	
}
