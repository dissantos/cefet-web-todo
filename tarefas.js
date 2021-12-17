//Exercicio 0
class Tarefa {
  constructor(nome, categoria, realizada){
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }

  addTaskPage(containerEl){
    let key = containerEl.childElementCount;
    containerEl.innerHTML += `
      <li key=${key} class="item-tarefa ${this.realizada? 'marcado': ''} categoria-${this.categoria}">
        ${this.nome}
      </li>
    `;
  }
}

let tarefas = [];
tarefas.push(new Tarefa('Comprar leite', 'compras', false));
tarefas.push(new Tarefa('Escutar chimbinha', 'lazer', true));

//Exercicio 1
let listEl = document.querySelector('#lista-tarefas');
listEl.innerHTML = '';

for ( let tarefa of tarefas ) {
  tarefa.addTaskPage(listEl);
}

//Exercicio 2
let includeTaskButton = document.querySelector('#incluir-nova-tarefa');
let newTaskNameInput = document.querySelector('#nova-tarefa-nome');
let newTaskCategoryInput = document.querySelector('#nova-tarefa-categoria');

function addTaskTodoList() {
  let newTask = new Tarefa(newTaskNameInput.value, newTaskCategoryInput.value, false);
  tarefas.push(newTask);
  newTask.addTaskPage(listEl);
  newTaskNameInput.value = '';
  newTaskNameInput.focus();
}

includeTaskButton.addEventListener('click', () => {
  addTaskTodoList();
})

//Opcional 3
let filterInput = document.querySelector('#filtro-de-categoria');

filterInput.addEventListener('change', () => {
  let listItemsEl = document.querySelectorAll('.item-tarefa');
  let categorySelected = 'categoria-' + filterInput.value;

  listItemsEl.forEach( (item) => {
    item.classList.remove('retido-no-filtro');
    if( !item.classList.contains(categorySelected) && filterInput.value) {
      item.classList.add('retido-no-filtro');
    }
  })

})

//Opcional 4
newTaskNameInput.addEventListener('keyup', (e) => {
  if( e.key === 'Enter' ) {
    addTaskTodoList();
  }
})

//Opcional 5
listEl.addEventListener('click', (e) => {
  e.target.classList.toggle('marcado');

  let id = e.target.attributes.key.value
  tarefas[id].realizada = !tarefas[id].realizada;

})
