function SLargeSSmall() {
	let number;
	let arr = [];
	for (let j = 0; j < 10; j++) {
		number = Math.floor(Math.random() * (999 - 100 + 1) + 100);
		arr[j] = number;
	}
	console.log(arr)
    let first=arr[0];
    let second=arr[0];
		for(let i=0;i<arr.length;i++)
		{
			if(arr[i]>first)
			{
				second=first;
				first=arr[i];
			}
			else if(arr[i]<second)
			{
				second=arr[i];
			}
		}
		console.log("second large"+first);
		console.log("second small"+second);
}
SLargeSSmall();
