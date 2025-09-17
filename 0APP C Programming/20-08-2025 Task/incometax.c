#include<stdio.h>
void main(){
	//wap to input per month salary of your father and calculate total income tax he need to pay 
	int m,it;
	printf("Enter per month salary :");
	scanf("%d",&m);

	it=(m*12)*10/100+(m*12)*18/100-(m*12)*2/100;
	printf("total income :%d",it);
	
	
	
}
