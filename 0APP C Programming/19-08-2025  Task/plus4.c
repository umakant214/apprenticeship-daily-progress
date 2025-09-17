#include<stdio.h>
void main(){
	int english,hindi,math,social,science;
	printf("Enter English marks :");
	scanf("%d",&english);
	printf("Enter Hindi marks :");
	scanf("%d",&hindi);
	printf("Enter Math marks :");
	scanf("%d",&math);
	printf("Enter social  marks :");
	scanf("%d",&social);
	printf("Enter Science marks :");
	scanf("%d",&science);
	int all_sum=english+hindi+math+social+science;
	printf("Sum of all subject number :%d",all_sum);
	
}
