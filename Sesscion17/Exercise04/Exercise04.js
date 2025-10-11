let squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = square.style.backgroundColor;
    });
    //==> reset backgroundColor is a default use addEvenlistener('mouseout')

    //  square.addEventListener('mouseout', () => {
    //     document.body.style.backgroundColor = '';
    // });
});