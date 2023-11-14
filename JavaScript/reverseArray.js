function reverseArray(arrayParameter) {
	let reversedArray = [];
	
	for (let index = 0; index < arrayParameter.length; index++) {
		reversedArray[index] = arrayParameter[(arrayParameter.length-1) - index];
	}
	return reversedArray;
}
//awesome
console.log(reverseArray(["a", "b", "c", "d", "e"]))
console.log(reverseArray([1, 2, 3, 4, 5]))
