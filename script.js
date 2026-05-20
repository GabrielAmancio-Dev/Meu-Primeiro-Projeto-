const tarefas = [
  {
    nome: 'Estudar HTML',
    data: 'TODA SEGUNDA',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },
  {
    nome: 'Praticar CSS e Flexbox',
    data: 'TODA SEGUNDA',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },
  {
    nome: 'Criar Landing Page',
    data: 'TODA TERÇA E SEXTA UM POUCO',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },
  {
    nome: 'Aprender JavaScript Básico',
    data: 'TODA TERÇA',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },
  {
    nome: 'Treinar lógica de programação',
    data: 'TODA QUARTA',
    horario: '13h',
    prazo: '2026-06-30',
    concluido: false
  }
];

const cards = document.getElementById('cards');
function atualizarTela() {

  cards.innerHTML = '';

  tarefas.forEach((tarefa, index) => {

    cards.innerHTML += `
      <div class="card">

        <h2>${tarefa.nome}</h2>

        <p class="descricao">
          Meta: ${tarefa.data}
        </p>

        <p class="prazo">
          Prazo: ${tarefa.prazo}
        </p>

        <p class="descricao">
          Horario: ${tarefa.horario}
        </p>

        <span class="${tarefa.concluido ? 'concluido' : 'pendente'}">
          ${tarefa.concluido ? 'Concluído' : 'Pendente'}
        </span>

      </div>
    `;
  });
}

atualizarTela();