#include<stdio.h>
void main(){
	int p,price;
	printf("Enter total purchased product :");
	scanf("%d",&p);
	
	printf("Enter per unit price  :");
	scanf("%d",&price);
	
	int total=p*price;
	printf("total price of product : %d",total);
	
}
