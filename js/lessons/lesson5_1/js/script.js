'use strict';

var x = +prompt("Введите число 1",16189);
var sum=0;
var str="Исходное число "+x+"\n";
var newNumber="";
var newNumberAfterRemove="";
if(!isNaN(+x) && x>=10000 && x<=99999) {
	//16489 //1
	var ost = x%10; //9
		sum+=ost; //sum=sum+ost //9
		x=(x-ost)/10 //x=parseInt(x/10)
		newNumber+=ost;
	//1648
	console.log(ost)
	
	var ost1 = x%10; //8
		sum+=ost1; //sum=sum+ost //17
		x=(x-ost1)/10 //x=parseInt(x/10)
		newNumber+=ost1;
	//164
	
	var ost2 = x%10; //4
		sum+=ost2; //sum=sum+ost //21
		x=(x-ost2)/10 //x=parseInt(x/10)
		newNumber+=ost2;
	
	// 16
	
	var ost3 = x%10; //6
		sum+=ost3; //sum=sum+ost //27
		x=(x-ost3)/10 //x=parseInt(x/10)
		newNumber+=ost3+""+x;
		sum+=x;

	// 1
	str+= x+ "+" + ost3 + "+" + ost2+ "+" + ost1+ "+" + ost+ "=" + sum; 
	console.log(str)
	console.log(newNumber)
	var del = +prompt("Введите цифру, которую надо remove",1)
	
	if(!isNaN(del) && del>=0 && del<=9){
		if(del!=x){
			newNumberAfterRemove+=x;
		}
		
		if(del!=ost3){
			newNumberAfterRemove+=ost3;
		}
		
		if(del!=ost2){
			newNumberAfterRemove+=ost2;
		}
		
		if(del!=ost1){
			newNumberAfterRemove+=ost1;
		}
		
		if(del!=ost){
			newNumberAfterRemove+=ost;
		}
		
		console.log("Цифра на удаление" + del + "\nНовое число -> "+newNumberAfterRemove)
	}
	else {
		console.error("Удалить не получится")
	}
	
}
else {
	console.error("Ошибка")
}