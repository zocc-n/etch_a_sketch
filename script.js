const main = document.querySelector('main');

for(let i=1; i<5; i++){
    for(let j=1; j<5; j++){
        main.innerHTML += `<div class="field" class="row_${i}" id="${i + '_' +j}"></div>`;
    }
}