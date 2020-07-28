const calculatorScreen=document.querySelector(".calculator-screen")
const updateScreen=(number)=>{
	calculatorScreen.value=number
}
const numbers=document.querySelectorAll(".number")
numbers.forEach((number)=>{
	number.addEventListener("click",(event)=> {
		updateScreen(event.target.value);
		inputNumber(event.target.value);
	})
})
let currinput='0';
let previnput='0';
let calculationoperator='';
const inputNumber=(number)=>{
	currinput=number;
}
const operators=document.querySelectorAll(".operator");
operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
		inputOperator(event.target.value);
	})
})
inputOperator=(operator)=>
{
	previnput=currinput;
	currinput='0';
	calculationoperator=operator;
}
const equalSign=document.querySelector(".equal-sign")
equalSign.addEventListener("click",(event)=>
{  
	calculate();
	updateScreen(currinput);
	
})
const calculate=()=>{
	let result=0;
	switch (calculationoperator)
	{
		case '+':
		    result=parseInt(previnput)+parseInt(currinput);
		    break;
		case '-':
		    result=parseInt(previnput)-parseInt(currinput);
		    break;
		case '/':
		    result=parseInt(previnput)/parseInt(currinput);
		    break;
		case '*':
		    result=parseInt(previnput)*parseInt(currinput);
		    break;
		case '%':
		    result=parseInt(previnput)%parseInt(currinput);
		    break;
		default:
		     return;
	}
	currinput=result.toString();
	//console.log(result)
	calculationoperator='';
}
const clearButton=document.querySelector(".all-clear");
clearButton.addEventListener("click",(event)=>
{
	clearAll();
	updateScreen(currinput);
})
const clearAll=()=>{
	previnput='0';
	currinput='0';
	calculationoperator='';
}


