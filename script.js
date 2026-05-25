let contador = 0;
let intervalo = null;

const tempo = document.getElementById('tempo')
const btnIniciar = document.getElementById('iniciar')
const btnPausar = document.getElementById('pausar')
const btnResetar = document.getElementById('resetar')

btnIniciar.addEventListener("click",function(){
    if(intervalo !== null)return;
    intervalo = setInterval(()=>{
        contador++;
        tempo.textContent = contador;
    },1000)
})

btnPausar.addEventListener('click', function(){
    if (intervalo !== null){
        clearInterval(intervalo);
        intervalo =null;
    }
})

btnResetar.addEventListener('click', function(){
    if (intervalo !== null){
        clearInterval(intervalo)
        intervalo = null;
        contador = 0 ;
        tempo.textContent = contador;
    }      
})
