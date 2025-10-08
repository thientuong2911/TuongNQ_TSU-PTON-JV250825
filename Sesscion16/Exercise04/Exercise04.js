function isEven (randomNumber){
    return randomNumber % 2 ===0;//Trả về True và ngược lại.
}
let randomNumber = +prompt("Mời bạn nhập số ngẫu nhiên cần kiểm tra");
let result = isEven(randomNumber);
console.log(`Kết quả kiểm tra là ${result}`);