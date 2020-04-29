let galeria = document.getElementById("galeria");

let cont = 0;

for (let i = 0; i < 65; i++) {
    let linha = document.createElement("div");
    linha.setAttribute("class", "row");

    for (let i = 0; i < 4; i++) {
        let coluna = document.createElement("div");
        coluna.setAttribute("class", "col col-3");

        cont++;

        if (cont == 77 || cont == 190 || cont == 193 || cont == 267 || cont == 268) {
            cont++;
        }

        let imagem = document.createElement("img");
        imagem.setAttribute("alt", "imagem" + cont);
        imagem.setAttribute("class", "hcw-image hcw-image-bordered");
        imagem.setAttribute("src", "../resources/img/trabalhos1/imagem" + cont + ".jpg");

        coluna.appendChild(imagem);






        linha.appendChild(coluna);
    }

    galeria.appendChild(linha);
}


