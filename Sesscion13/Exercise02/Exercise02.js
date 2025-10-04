let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let luckyNumber = Number(prompt(" Mời bạn nhập số may mắn của bạn:"));
let myNumber = false;
for(let i = 0; i < array.length; i++){
    if (array[i] === luckyNumber){
        myNumber = true;
    }
}
if (myNumber){
    alert('Bingo');
}else{
    alert('Chúc bạn may mắn lần sau');
}