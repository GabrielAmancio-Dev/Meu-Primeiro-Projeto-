const tarefas = [
  { nome: "Estudar HTML", concluido: false },
  { nome: "Estudar CSS", concluido: false },
  { nome: "Estudar JS", concluido: false }
];

const cards = document.getElementById("cards");
function renderizar(){
  cards.innerHTML = "";

  tarefas.forEach(tarefa => {
    cards.innerHTML += `
      <div class="card">
        <h2>${tarefa.nome}</h2>
      </div>
    `;
  });
}

renderizar();

function alternar(index){
  tarefas[index].concluido = !tarefas[index].concluido;
  renderizar();
} 