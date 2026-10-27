// let body = document.querySelector("body");
//  let div = document.querySelector ("div");
//  body.removeChild(div)

//------ATIV 01-----
// let body = document.querySelector("body");
// let h1 = document.querySelector("h1")
// body.removeChild(h1)

// let h1 = document.querySelector("#trocarCor");

// h1.style.color= "deepPink"; //esse comando serve para acessar a propriedade de cores da fonte do html.

// h1.style.background = "yellow";
// h1.style.height= "40px";
// sempre que quiser alterar ou saber um valor do css de um elemento html: nomeDaTag.style.atributo
// body.style.backgroundColor= "deepPink";
// var h1= document.querySelector("h1");
// var paragrafo = document.querySelector("p");

// paragrafo.innerText =h1.innerText;
//------------------------------------------

//------ATIV 2-----
// let corDeFundo = prompt ("Digite a cor que deseja para o fundo da página. \n[OPÇÕES]: \nCores primárias (red, yellow, blue)\nCores secundárias (orange, green, purple).");
// function verificarCor(corDeFundo){
//     if(corDeFundo === "blue" || corDeFundo === "yellow" || corDeFundo === "red")
//         return "Cor primária escolhida!"
//     else if (corDeFundo === "green" || corDeFundo === "orange " || corDeFundo === "purple"){
//         return "Cor secundária escolhida!"
//     }
//     else {
//         return "Essa não é uma cor primária/secundária."
//     }
// }
// let cor = verificarCor(corDeFundo);

// let body = document.querySelector("body");
// body.style.backgroundColor= corDeFundo
// alert(cor) 
//------------------------------------------

//-----ATIV 2-----
let body = document.querySelector("body");
let button = document.querySelector("button");
h1 = document.querySelector("h1");

button.addEventListener("click", function () {
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        h1.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        h1.style.color = "black";
    }
});
//------------------------------------------------------