#include<stdio.h>
void main(){
	int amount;
	printf("Enter total amount :");
	scanf("%d",&amount);
	int note500=amount/500;
	int rnote=amount-note500*500;
	
	int note200=rnote/200;
	int r1note=rnote-note200*200;
	
	
	int note100=r1note/100;
	int r2note=r1note-note100*100;
	
	
	int note50=r2note/50;
	printf("number of 500 note :%d \n",note500);
		printf("number of 200 note :%d \n",note200);
			printf("number of 100 note :%d \n",note100);
				printf("number of 50 note :%d \n",note50);
}
