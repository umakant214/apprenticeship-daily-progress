#include<stdio.h>
void main(){
	//write to inpout a 4 digit number and find the sum of digit
	int num;
	printf("Enter four digit number :");
	scanf("%d",&num);
	int firstnum=num%10;
     num=num/10;
	int secondnum=num%10;
     num=num/10;
     int third1num=num%10;
     num=num/10;
	int sum=firstnum+secondnum+thirdnum+num;
	printf(" sum of all digit :%d",sum);
	
}
