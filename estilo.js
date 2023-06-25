const contador = document.getElementById("contar");
const sumar = document.getElementById("incremento");
const restar = document.getElementById("decremento");
const reset = document.getElementById("reset");

let numeri = 0;

sumar.addEventListener("click" , ()=>{
    numeri++;
    contador.innerHTML = numeri
} );

restar.addEventListener("click" , ()=>{
    if (numeri==0) {}
        else{
            numeri--;
            contador.innerHTML = numeri;
    }
} );


reset.addEventListener("click" , ()=>{
    numeri= 0;
    contador.innerHTML = numeri
} );


console.log("hice un cambio xd ")