// #include<stdio.h>
// void main(){
// 	//wap to input per month salary of your father and calculate total income tax he need to pay
// 	int m,it;
// 	printf("Enter per month salary :");
// 	scanf("%d",&m);

// 	it=(m*12)*10/100+(m*12)*18/100-(m*12)*2/100;
// 	printf("total income :%d",it);

// }

#include <stdio.h>

int main()
{
	int monthly_salary;
	float annual_income, tax = 0;

	printf("Enter your father's monthly salary: ");
	scanf("%d", &monthly_salary);

	annual_income = monthly_salary * 12;

	if (annual_income <= 250000)
	{
		tax = 0;
	}
	else if (annual_income <= 500000)
	{
		tax = (annual_income - 250000) * 0.10;
	}
	else if (annual_income <= 1000000)
	{
		tax = (250000 * 0.10) + (annual_income - 500000) * 0.20;
	}
	else
	{
		tax = (250000 * 0.10) + (500000 * 0.20) + (annual_income - 1000000) * 0.30;
	}

	printf("Annual Income: ₹%.2f\n", annual_income);
	printf("Income Tax Payable: ₹%.2f\n", tax);

	return 0;
}
