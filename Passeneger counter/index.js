var countEl=document.getElementById("count-el");
let count=0;

function increment(){
    count=count+1;
    countEl.innerText=count;
}

function save(){
    alert("The number saved is "+ count);
}
