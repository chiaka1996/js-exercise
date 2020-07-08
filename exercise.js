
const minimumValue = (a,b) => console.log('minimum value :' + Math.min(a,b));

const maximumValue = (a,b) => console.log('maximum value :' + Math.max(a,b));

const divisibleByTwo = (x) => {
	let ans = x % 2 === 0 ? true : !true
	console.log('divisible by 2 :' + ans);
	return ans;
}
 
const numberFromOneToTwenty = (z) => {
	if(z < 1 || z > 20) {
		console.log('invlaid number')
		return "invalid number"
	}
	for(let i = 0; i <= z; i++ ){
		let loopedNumbers = i;
		console.log(loopedNumbers);
	}
}

const sumOfArray = ([...arg]) => {

	let sum = arg.reduce(function(a,b){return a + b}, 0);
	console.log(`sum of arrays : ${sum}`);	
}

const containsTwoFourorFive = ([...args]) => {
	let boolean = args.includes(2) || args.includes(4) || args.includes(5) ? true : !true ;
		console.log(boolean);
		return boolean;
}


maximumValue(98,-98);
minimumValue(3,5);
divisibleByTwo(4);
numberFromOneToTwenty(4);
sumOfArray([3,2,5,9]);
containsTwoFourorFive([1,8,9,7,6]);








