//Exercicio 0
class Tarefa {
  constructor(nome, categoria, realizada){
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }

  addTaskPage(containerEl){
    containerEl.innerHTML += `
      <li class="item-tarefa ${this.realizada? 'marcado': ''} categoria-${this.categoria}">
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

includeTaskButton.addEventListener('click', () => {
  let newTask = new Tarefa(newTaskNameInput.value, newTaskCategoryInput.value, false);
  tarefas.push(newTask);
  newTask.addTaskPage(listEl);
  newTaskNameInput.value = '';
  newTaskNameInput.focus();
})

//Opcional 3
let filterInput = document.querySelector('#filtro-de-categoria');
let listItemsEl = document.querySelectorAll('.item-tarefa');

filterInput.addEventListener('change', () => {
  let categorySelected = 'categoria-' + filterInput.value;

  listItemsEl.forEach( (item) => {
    item.classList.remove('retido-no-filtro');
    if( !item.classList.contains(categorySelected) && filterInput.value) {
      item.classList.add('retido-no-filtro');
    }
  })

})