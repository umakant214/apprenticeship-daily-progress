#include<stdio.h>
int main(){
	int dobyear,dobmonth,dobdate;
	printf("input year of your dob :");
	scanf("%d",&dobyear);
	
	printf("input month of your dob :");
	scanf("%d",&dobmonth);
	
	printf("input date of your dob :");
	scanf("%d",&dobdate);
	
	int cyear,cmonth,cdate;
	printf("input year of current :");
	scanf("%d",&cyear);
	
	
	printf("input month of current :");
	scanf("%d",&cmonth);
	
	printf("input current date :");
	scanf("%d",&cdate);
	if(cdate<0 && cdate>30){
		printf("Enter valid date");
	}
	
	if(dobdate>cdate){
		dobdate=cdate-dobdate;
		
	}else{
		dobdate=(dobdate+30)-cdate;
	}
	if(dobmonth>cmonth){
		dobmonth=dobmonth-cmonth;
	}else{
		dobmonth=(dobmonth+12)-cmonth;
		dobyear=cyear-dobyear;
}
printf("%d day %d month %d  year old ",dobdate,dobmonth,dobyear);
	
}
