// armazenando todos os elementos li,lista(s), do html.
let elements = document.getElementsByTagName("li")
// o for percorre cada item da lista
for(let i = 0;i<elements.length;i++){
// criamos uma span,HTML <span> é um conteiner generico em linha para conteúdo fraseado.
    let span = document.createElement("span")
    // criamos uma variável para criar um x de deletar o item da lista e armazenando na variável close
    let close = document.createTextNode("/u00D7")
    // definimos uma class para a variável span
    span.className = "close"
    //adicionamos o simbolo de fechar na variavel span
    span.appendChild(close)
//adicionamos a variavel elements na lista span
    elements.appendChild(span)
}
console.log(elements)