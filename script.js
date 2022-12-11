const main = document.querySelector('main');

let numOfElements = 16;

for(let i=1; i<=numOfElements; i++){
    for(let j=1; j<=numOfElements; j++){
        main.innerHTML += `<div onclick="changeColor(this)" class="field" class="row_${i}" id="${i + '_' +j}"></div>`;
    }
}

main.style.gridTemplateColumns = 'auto '.repeat(numOfElements);

function changeColor(e){
    document.getElementById(e.id).style.background = 'goldenrod';
}