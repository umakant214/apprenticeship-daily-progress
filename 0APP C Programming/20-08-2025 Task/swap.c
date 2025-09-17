#include<stdio.h>
void main(){
	int a,b,temp;
	printf("Enter your number a,b :");
	scanf("%d%d",&a,&b);
	printf("without swaping number :%d %d ",a,b);
	 temp=a;
	 a=b;
	 b=temp;
	 printf("swap the number :%d %d ",a,b);

}
