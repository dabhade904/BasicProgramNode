function SumOfThreeInteger() {
    var sum = 0;
    let arr = [1, 2, 4, -3, -1, 5, 6];
   console.log("sum 6 array element");

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    sum++;
                   console.log(arr[i] + " + " + arr[j] + " + " + arr[k] + " =0");
                }
            }
        }
    }
    console.log("total pair are " + sum);
}

SumOfThreeInteger();