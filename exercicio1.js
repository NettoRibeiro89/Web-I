function mudarTexto(){
    const conteudo = document.getElementById("nome").value;

    document.getElementById("message").innerText = conteudo;

}

function mudarEstilo(){
    const p = document.getElementById("message");

    p.style.color = "blue";
    p.style.fontSize = "32px";
}