const btnAdd = document.getElementById('piu');
const btnRem = document.getElementById('meno');
const btnZero = document.getElementById('reset');
let counter = document.getElementById('cifra');
let number = 0;

btnAdd.addEventListener('click', ()=>{ if(number < 999) {
  console.log("somma");
  number ++;
  counter.textContent = number;
} else {
  alert("Non puoi andare oltre!");
}});
btnRem.addEventListener('click', ()=>{if(number > 0) {
  console.log("sottrai");
  number --;
  counter.textContent = number;
}else {
  alert("Non puoi visualizzare numeri negativi!");
}});
btnZero.addEventListener('click', ()=>{
  number = 0;
  counter.textContent = number;
  console.log("reset");
});
