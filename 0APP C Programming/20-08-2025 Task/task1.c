#include<stdio.h>
void main(){
	int s;
	printf("Enter seconds :");
	scanf("%d",&s);
	int h=s/3600;
	int rs=s-h*3600;
	int m=rs/60; 
	int r1=rs-m*60;
	printf("hours :%d\n",h);
printf("minuts:%d\n",m);
printf("remaining seconds :%d\n",r1); 
	
}
