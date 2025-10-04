// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
for (let i = 1; i <= 100; i = i + 1) {
    console.log(i);
    if (i === 99) {
        alert(`Đây là số thứ ${i}.Đã hoàn thành!`);
    }
}

//Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. 
//Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
let temp = Number(prompt("Vui lòng nhập nhiệt độ hiện tại :"));

if (temp > 100) {
    console.log("Nhiệt độ quá cao vui lòng hạ nhiệt xuống");
} else if (temp < 20) {
    console.log("Nhiệt độ quá thấp vui lòng tăng nhiệt lên");
} else {
    console.log(`Nhiệt độ hiện tại là ${temp} đang ổn định vui lòng theo dõi tiếp`);
}

//Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

let fib = [0, 1];

for (let i = 2; i < 20; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(`20 số đầu tiên trong dãy số fibonacci là ${fib}`);

//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// let fib5 = [0, 1];

// for (let i = 2; i < 20; i++) {
//     fib5[i] = fib5[i - 1] + fib5[i - 2];
//     if(fib[i] % 5 ===0){
//     console.log(`số đầu tiên chia hết cho 5 trong dãy số fibonacci là` );
//     break;
// }
// }
let a = 0;
let b = 1;
let fib0 = 0;
let fib1 = 1;
//  console.log(`so thu 1 la ${fib0}`);
//  console.log(`so thu 2 la ${fib1}`);

for (let j = 2; j < 20; j = j + 1) {
    fib_j = a + b;
    if (fib_j % 5 === 0) {
        console.log(`Số đầu tiên trong dãy số fibonacci chia hết cho 5 là ${fib_j}`);
        break;
    } else {
        a = b;
        b = fib_j;
    }
}

//Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
let fibSum20 = [0, 1];
let sum = fibSum20[0] + fibSum20[1];
for (let k = 2; k < 20; k++) {
    fibSum20[k] = fibSum20[k - 1] + fibSum20[k - 2];
    sum = sum + fibSum20[k];
}
console.log(`Tổng của 20 số đầu tiên trong dãy số Fibonacci là ${sum}`);

//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let sum2 = 0;
let division7 = 0;
for (let m = 1; m < 30; m++) {
    sum2 = sum2 + division7;
    division7 = division7 + 7;
    console.log(`Số thứ ${m} chia hết cho 7 là ${division7}`);
}
console.log(`Tổng của 30 số tự nhiên đầu tiên chia hết cho 7 là : ${sum2}`);

//Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. 
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. 
// Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”
for (let n = 1; n < 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('FizzBuzz');
    }else if (n % 3 === 0) {
        console.log("Fizz");
    }else if(n % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(n);
    }
}