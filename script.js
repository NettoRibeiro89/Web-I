document.addEventListener("DOMContentLoaded", function() {
const ToDoInput = document.querySelector("#entradaTarefa");
const ToDoList = document.querySelector("#listaTarefas");

function adicionarTarefa() {
    const tarefa = ToDoInput.value;
    if (tarefa) {
        const li = document.createElement("li");
        li.textContent = tarefa;
        li.classList.add("list-group-item");
        ToDoList.appendChild(li);
        ToDoInput.value = "";
    }
}
function limparTarefas() {
    ToDoList.innerHTML = "";
} 
function removerTarefa(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
}
ToDoList.addEventListener("click", removerTarefa);
ToDoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
document.querySelector("#adicionarTarefa").addEventListener("click", adicionarTarefa);
document.querySelector("#limparTarefas").addEventListener("click", limparTarefas);

// Adiciona o foco ao campo de entrada quando a página é carregada
window.addEventListener("load", function() {
    ToDoInput.focus();
});

// Adiciona um evento para limpar o campo de entrada ao clicar no botão "Limpar Tarefas"
document.querySelector("#limparTarefas").addEventListener("click", function() {
    ToDoInput.value = "";
});
// Adiciona um evento para adicionar uma tarefa ao pressionar a tecla "Enter"
ToDoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
// Adiciona um evento para remover uma tarefa ao clicar nela
ToDoList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});
// Adiciona um evento para adicionar uma tarefa ao clicar no botão "Adicionar Tarefa"
document.querySelector("#adicionarTarefa").addEventListener("click", function() {
    adicionarTarefa();
});
// Adiciona um evento para limpar a lista de tarefas ao clicar no botão "Limpar Tarefas"
document.querySelector("#limparTarefas").addEventListener("click", function() {
    limparTarefas();
});
// Adiciona um evento para limpar o campo de entrada ao clicar no botão "Limpar Tarefas"
document.querySelector("#limparTarefas").addEventListener("click", function() {
    ToDoInput.value = "";
});
// Adiciona um evento para adicionar uma tarefa ao pressionar a tecla "Enter"
ToDoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
});