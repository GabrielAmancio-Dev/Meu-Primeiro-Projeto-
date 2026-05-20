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
    horario: '',
    prazo: '2026-06-30',
    horario: '13h',
    concluido: false
  },

  {
    nome: 'Aprender Git e GitHub',
    data: 'TODOS OS DIAS',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },

  {
    nome: 'Subir projeto no GitHub',
    data: 'TODA VEZ QUE FIZER ALGO',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },

  {
    nome: 'Montar LinkedIn tech',
    data: 'TODO SABADO OU SE FIZER ALGO NA SEMANA',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },

  {
    nome: 'Criar projeto para portfólio',
    data: 'REVER SEXTA E SABADO',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },

  {
    nome: 'Revisar conteúdos do mês',
    data: 'TODA QUINTA',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  }
  ,{
    nome: 'Praticar Inglês',
    data: 'QUARTA, QUINTA E SABADO',
    horario: '',
    prazo: '2026-06-30',
    concluido: false
  },
];

const cards = document.getElementById('cards');

function atualizarTela() {

  cards.innerHTML = '';

  tarefas.forEach((tarefa, index) => {

    cards.innerHTML += `
    
      <div class="card">

        <h2>${tarefa.nome}</h2>

        <p class="prazo">
            Prazo final: ${tarefa.prazo}
        </p>


        <p class="descricao">
          Meta: ${tarefa.data}
        </p>

        <p class="prazo">
            Horario: ${tarefa.horario}
        </p>

        <span class="${tarefa.concluido ? 'concluido' : 'pendente'}">
          ${tarefa.concluido ? 'Concluído' : 'Pendente'}
        </span>

        <div style="margin-top: 15px;">
          <label>

            <input
              type="checkbox"
              ${tarefa.concluido ? 'checked' : ''}
              onchange="alterarStatus(${index})"
            >

            Concluir tarefa

          </label>
        </div>

      </div>

    `;
  });

  const total = tarefas.length;

  const concluidas = tarefas.filter(t => t.concluido).length;

  const percentual = Math.round((concluidas / total) * 100);

  document.getElementById('percentual').innerText =
    percentual + '%';

  document.getElementById('barra').style.width =
    percentual + '%';

  document.getElementById('texto-progresso').innerText =
    `Você concluiu ${concluidas} de ${total} tarefas`;
}

function alterarStatus(index) {

  tarefas[index].concluido =
    !tarefas[index].concluido;

  atualizarTela();
}

atualizarTela();
