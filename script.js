const main = document.querySelector('main');
let selectedColor = 'black';

function drawSquares(numOfElements){
    main.innerHTML = '';
    for(let i=1; i<=numOfElements; i++){
        for(let j=1; j<=numOfElements; j++){
            main.innerHTML += `<div onmouseover="colorElement(this)" class="field" class="row_${i}" id="${i + '_' +j}"></div>`;
        }
    }
    main.style.gridTemplateColumns = 'auto '.repeat(numOfElements);
}

function colorElement(e){
    document.getElementById(e.id).style.background = selectedColor;
}

document.getElementById('colorMenu').addEventListener('change', function() {
     selectedColor = this.value;
});

function changeSquareNum(){
    numOfElements = document.getElementById('elemNumForm').value;
    drawSquares(numOfElements);
}

drawSquares(16);