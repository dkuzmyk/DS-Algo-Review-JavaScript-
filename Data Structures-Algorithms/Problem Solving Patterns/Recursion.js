function callDec(num){
	console.log(num)
	if(num==0) return 0;
    else return callDec(num-1)
}

function callInc(num){
	if(num==0) return 0;
    else callInc(num-1)
    console.log(num)
}

console.log(callDec(10))
console.log(callInc(10))