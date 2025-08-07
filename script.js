let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let filtroAtual = 'todas'; 

const entradaTarefa = document.getElementById("entradaTarefa");
const listaTarefas = document.getElementById("listaTarefas");
limparConcluidas.removeChild("limparconcluidas");

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function limparConcluidas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

function adicionarTarefa() {
  const texto = entradaTarefa.value.trim();
  if (texto === "") return;

  tarefas.push({ texto, concluida: false });
  entradaTarefa.value = "";
  salvarTarefas();
  atualizarLista();
}

function limparConcluidas() {
    const texto = removeTarefa.value.trim();
    if (texto === "") return;
  
    tarefas.push({ texto, concluida: true });
    removerTarefa.value = "";
    limparConcluidas();
    atualizarLista();
  }

function alternarConclusao(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  salvarTarefas();
  atualizarLista();
}

function removerTarefa(index) {
  tarefas[index].concluida = true;
  salvarTarefas();
  atualizarLista();
}

function atualizarLista() {
  listaTarefas.innerHTML = "";


  let tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtroAtual === "pendentes") return !tarefa.concluida;
    if (filtroAtual === "concluidas") return tarefa.concluida;
    return true; 
  });

  tarefasFiltradas.forEach((tarefaFiltrada, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center fade-in";

    const span = document.createElement("span");
    span.textContent = tarefaFiltrada.texto;
    if (tarefaFiltrada.concluida) span.classList.add("concluida");

    span.style.cursor = "pointer";
    span.addEventListener("click", () => alternarConclusao(index));

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "btn btn-danger btn-sm";
    btnRemover.addEventListener("click", () => removerTarefa(index));

    li.appendChild(span);
    li.appendChild(btnRemover);
    listaTarefas.appendChild(li);
  });
  
  document.querySelectorAll(".filtros .btn").forEach((btn, index) => {
    btn.classList.remove("active");
    if (filtroAtual === "todas" && index === 0) btn.classList.add("active");
    if (filtroAtual === "pendentes" && index === 1) btn.classList.add("active");
    if (filtroAtual === "concluidas" && index === 2) btn.classList.add("active");
  });
}

document.querySelectorAll(".filtros .btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index === 0) filtroAtual = "todas";
    if (index === 1) filtroAtual = "pendentes";
    if (index === 2) filtroAtual = "concluidas";
    atualizarLista(); 
  });
});

atualizarLista();