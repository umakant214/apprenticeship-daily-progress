#include <stdio.h>
int main()
{
	//	WAP to calculate total late fee charge of library book via input of issue date of book and return date of book.
	// Input year of book issue

	int i_year, i_month, i_date, cyear, cmonth, cdate;
	printf("input year of book issue date :");
	scanf("%d", &i_year);

	printf("input month of book issue date:");
	scanf("%d", &i_month);

	printf("input date of book issue date :");
	scanf("%d", &i_date);

	printf("input year of current return date :");
	scanf("%d", &cyear);

	printf("input month of current return date :");
	scanf("%d", &cmonth);

	printf("input date of current return date:");
	scanf("%d", &cdate);

	int t_days, t_month, t_year;

	if (cdate < i_date)
	{
		cdate = cdate + 30;
		cmonth = cmonth - 1;
	}
	t_days = cdate - i_date;

	if (cmonth < i_date)
	{
		cmonth = cmonth + 12;
		cyear = cyear - 1;
	}
	t_month = cmonth - i_month;

	if (cyear >= i_year)
	{
		t_year = cyear - i_year;
	}

	int fine = t_days * 2;
	int fine2 = t_days * 4;
	printf(" :%d days %d  month  %d  years old \n", t_days, t_month, t_year);
	printf("fine of 10 days %d", fine);
	printf("fine of 30 days %d", fine2);
}
