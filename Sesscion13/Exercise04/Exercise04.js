let array = prompt(' Nhập vào chuỗi sô:').split(',');
let maxnumber = Number(array[0]);
for(let i = 1; i < array.length; i++){
    if(maxnumber < Number(array[i])){
        maxnumber = Number(array[i]);
    }
}
console.log(`Số lớn nhất trong dãy số trên là ${maxnumber}`);
