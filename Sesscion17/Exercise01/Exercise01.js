let text = document.getElementById('text');
let btnHide = document.getElementById('hide');
let btnShow = document.getElementById('show');
btnHide.onclick = function () {
    text.style.display = 'none';
};
btnShow.onclick = function () {
    text.style.display = 'block';
};