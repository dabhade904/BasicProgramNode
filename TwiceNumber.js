let arr = [];
let range = 100;
for (let i = 1; i <= range; i++) {
    arr[i] = i;
}
for (let j = 0; j <=arr.length;j+=11) {
    if(arr[j]!=undefined){
        console.log("Twice number ",arr[j]);
    }
}