function minOfArray(array){
    if(!Array.isArray(array)){
        alert("Thông tin bạn nhập không phải là mảng");
        return;
    }
    if(array.length === 0){
        alert("Mảng không có phần từ");
        return;
    }
    let minNumber = Infinity;
    for(i = 0;i < array.length; i++){
        if(minNumber > array[i]){
            minNumber = array[i];
        }
    }
    return minNumber;
}
const arr1 = [3, 5, 1, 8, -3, 7, 8];
let minNumber1 = minOfArray(arr1);
console.log(`min của mảng arr1 là: ${minNumber1}`);

const arr2 = [7, 12, 6, 9, 20, 56, 89];
let minNumber2 = minOfArray(arr2);
console.log(`min của mảng arr2 là: ${minNumber2}`);

const arr3 = [];
let minNumber3 = minOfArray(arr3);
console.log(`min của mảng arr3 là: ${minNumber3}`);

const arr4 = [0, 0, 0, 0, 0, 0];
let minNumber4 = minOfArray(arr4);
console.log(`min của mảng arr4 là: ${minNumber4}`);