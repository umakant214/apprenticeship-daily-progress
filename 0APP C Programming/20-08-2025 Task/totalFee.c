#include<stdio.h>
void main(){
	int tfee;
	printf("Enter tution fee :");
	scanf("%d",&tfee);
	
	int examFee=(tfee)*30/100;
	 int library=1000;
	int activityc=(tfee)*20/100;
	int mc=(tfee)*3/100;
	int total=tfee+examFee+library+activityc+mc;
	printf("total fee : %d",total);
}
