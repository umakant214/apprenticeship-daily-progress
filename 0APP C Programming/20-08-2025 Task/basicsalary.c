#include<stdio.h>
void main(){
	// wap to input basic slary and cal the gross salary 
	//gross salary = basic salary+PF +HrA+Da
	//pf= basic salary *5%
	//hra=bs*45%
	//
	int bs,pf,hra,da;
	printf("Enter the basic salary :");
	scanf("%d",&bs);
	 pf=bs*5/100;
	 hra=bs*45/100;
	 da=bs*30/100;
	int grass=bs+pf+hra+da;
	printf("grass salary : %d",grass);
}
