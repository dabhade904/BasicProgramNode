let number;
let arr = [];
for (let i = 0; i < 10; i++) {
	number = Math.floor(Math.random() * (999 - 100 + 1) + 100);
	arr[i] = number;
}
for (let i = 0; i <arr.length; i++) {
	for (let j = i + 1; j <arr.length; j++) {
		if (arr[i] > arr[j]) {
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}	
}
console.log(arr)
console.log("Second Largest:" + arr[arr.length-2]);
console.log("Smallest:" + arr[1]);

