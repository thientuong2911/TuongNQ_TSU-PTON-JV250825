// Bài 1: Chuyển từ độ C sang độ F.
let celsius = +prompt("Vui lòng nhập độ C bạn muốn chuyển độ sang độ F:");

if (Number.isFinite(celsius)) {
    const farrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius} độ C chuyển sang độ F sẽ là ${farrenheit} độ F`);

} else {
    console.log("Vui lòng nhập một giá trị là số");
}

// Bài 2: Chuyển từ mét sáng feet
let metter = +prompt("Vui lòng nhập số met bạn muốn chuyển độ sang feet:");

if (Number.isFinite(metter)) {
    const feeter = (metter * 3.2808);
    console.log(`${metter} mét chuyển sang feet sẽ là ${feeter} feet`);

} else {
    console.log("Vui lòng nhập một giá trị là số");
}

// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
let canhA = +prompt("Vui lòng nhập cạnh của hình vuông:");

if (Number.isFinite(canhA)) {
    const squareArea = Math.pow(canhA, 2);
    console.log(`Hình vuông có canh ${canhA} mét là ${squareArea} mét vuông`);

} else {
    console.log("Vui lòng nhập một giá trị là số");
}

// Bài 4: Tính diện tích hình chữ nhật khi biét cạnh a và b.
let edgeA = +prompt("Vui lòng nhập cạnh A của hình chữ nhật:");
let edgeB = +prompt("Vui lòng nhập cạnh B của hình chữ nhật:");

if (Number.isFinite(edgeA)) {
    if (Number.isFinite(edgeB)) {
        const rectangular = edgeA * edgeB;
        console.log(`Hình chữ nhật có canh A là ${edgeA} mét và cạnh B là ${edgeB} met có diện tích là ${rectangular} mét vuông`);
    }
    else {
        console.log("Vui lòng nhập giá trị cạnh B là số")
    }

} else {
    console.log("Vui lòng nhập giá trị cạnh A là số");
}

// Bài 5: Tính diện tích hình tam giác vuông khi biết 2 cạnh liền kề
let triangleEdgeA = +prompt("Vui lòng nhập cạnh A của hình tam giác:");
let triangleEdgeB = +prompt("Vui lòng nhập cạnh B của hình tam giác:");

if (Number.isFinite(triangleEdgeA)) {
    if (Number.isFinite(triangleEdgeB)) {
        const triangleArea = triangleEdgeA * triangleEdgeB / 2;
        console.log(`Hình tam giác có canh A là ${triangleEdgeA} mét và cạnh B là ${triangleEdgeB} met có diện tích là ${triangleArea} mét vuông`);
    }
    else {
        console.log("Vui lòng nhập giá trị cạnh B là số")
    }

} else {
    console.log("Vui lòng nhập giá trị cạnh A là số");
}

// Bài 6: giải phương trình bậc 1
let equation1a = +prompt("Vui lòng nhập hệ số a của phương trình a.x + b = 0");
let equation1b = +prompt("Vui lòng nhập hệ số b của phương trình a.x + b = 0");

if (equation1a === 0 && equation1b === 0) {
    console.log(`Kết quả của phuong trình ${equation1a}x + ${equation1b} = 0 là vô số nghiệm`);
} else if (equation1a === 0 && equation1b !== 0) {
    console.log(`Kết quả của phuong trình ${equation1a}x + ${equation1b} = 0 là vô nghiệm`);
} else {
    const result1 = -equation1b / equation1a;
    console.log(`Kết quả của phuong trình ${equation1a}x + ${equation1b} = 0 là ${result1}`);
}

let equation2a = +prompt(`Vui lòng nhập hệ số a của phương trình a.x^2 + bx + c = 0`);
let equation2b = +prompt(`Vui lòng nhập hệ số b của phương trình a.x^2 + bx + c = 0`);
let equation2c = +prompt(`Vui lòng nhập hệ số c của phương trình a.x^2 + bx + c = 0`);

let delta = equation2b * equation2b - 4 * equation2a * equation2c;

if (equation2a === 0) {
    console.log(`Đây không phải là phương trình bậc 2 do hệ số của x^2 bằng 0`)
} else if (delta > 0) {
    let x1 = (-equation2b + Math.sqrt(delta)) / (2 * equation2a);
    let x2 = (-equation2b - Math.sqrt(delta)) / (2 * equation2a);
    console.log(`Phương trình có 2 nghiệm phân biệt là X1 = ${x1} và nghiệm X2 = ${x2}`);
} else if (delta === 0) {
    let x = -equation2b / (2 * equation2a);
    console.log(`Phương trình có nghiệm kéo là X = ${x} `);
}else{
    console.log(`Phương trình vô nghiệm`);
}

//Bài 8: kiểm tra xem một số nhạp vào có phải là tuổi của một người không
// Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hon 0.

let age = +prompt(" Vui lòng nhập tuổi của bạn");// Thay đổi giá trị của number để kiểm tra

if (Number.isInteger(age) && age > 0 && age< 120) {
    console.log(`Số ${age} là tuổi của bạn`);
} else {
    console.log(`Tuổi bạn nhập vào không đúng`);
}
