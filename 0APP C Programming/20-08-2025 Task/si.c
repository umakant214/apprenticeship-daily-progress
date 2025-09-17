#include<stdio.h>
void main(){
	int p,r,t;
	printf("Enter principle amount :");
	scanf("%d",&p);
	
	printf("Enter rate amount :");
	scanf("%d",&r);
	
	printf("Enter time :");
	scanf("%d",&t);
	
	int si=(p*r*t)/100;
	printf(" your si = %d",si);
	
	
}
