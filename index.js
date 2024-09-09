let countEl = document.getElementById("counter-id");
let saveEl = document.getElementById("save-el");
console.log(countEl);

let count = 0;

function increment(){
    count += 1;
    countEl.innerText = count;
    
}

function save(){
    let entries =count  + " - ";
    saveEl.textContent += entries;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}
