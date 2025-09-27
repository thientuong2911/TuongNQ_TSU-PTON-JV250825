let yearCheck = Number(prompt('Mời bạn nhập năm cần kiểm tra:'));
if (yearCheck % 4===0 && yearCheck % 100 !== 0){
    alert(`${yearCheck} là năm nhuận`);
} else{
    alert(`${yearCheck} không phải là năm nhuận`);
}
