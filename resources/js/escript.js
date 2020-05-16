function clicar(item){
  if(item != 'navbar'){
    let accordion = document.querySelector('#'+item);
    accordion.classList.toggle('container-accordion');
  }
  else{
    let accordion = document.querySelector('#'+item);
    accordion.classList.toggle('nav-container-accordion');
  }
}

let lista = new Array();
let lista2 = new Array();

for(let i = 0; i < 28; i++){ lista.push(document.querySelector('#imagem'+i)); }
for(let i = 0; i < 28; i++){ lista.push(document.querySelector('#imagem'+i+'-mini')); }

let indice = 0;

function trocar(acao){
  if(acao == 'proximo'){
        lista[indice].classList.toggle('display-none');
        if(indice == (lista.length - 1)){ indice = 0; }
        indice += 1;
        lista[indice].classList.toggle('display-none');
  }
  else if(acao == 'anterior'){
        lista[indice].classList.toggle('display-none');
        if(indice == 0){ indice = 27; }
        indice -= 1;
        lista[indice].classList.toggle('display-none');
  }
}
