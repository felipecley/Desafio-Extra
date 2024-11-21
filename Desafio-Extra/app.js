// Seleciona os elementos do DOM
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Adiciona um evento de envio ao formulário
taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const taskText = taskInput.value.trim(); // Remove espaços extras
    if (taskText) {
        addTask(taskText); // Adiciona a tarefa
        taskInput.value = ""; // Limpa o campo
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
});

// Função para adicionar uma nova tarefa
function addTask(taskText) {
    const taskItem = document.createElement("li"); // Cria um novo item da lista

    // Adiciona conteúdo ao item
    taskItem.innerHTML = `
        <span>${taskText} <em>(Não Concluído)</em></span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="remove-btn">✖</button>
        </div>
    `;

    taskList.appendChild(taskItem); // Adiciona o item à lista

    // Evento para alternar entre "Concluído" e "Não Concluído"
    taskItem.querySelector(".complete-btn").addEventListener("click", () => {
        const taskStatus = taskItem.querySelector("span em");
        
        if (taskItem.classList.toggle("completed")) {
            taskStatus.textContent = "(Concluído)";
        } else {
            taskStatus.textContent = "(Não Concluído)";
        }
    });

    // Evento para remover a tarefa
    taskItem.querySelector(".remove-btn").addEventListener("click", () => {
        taskItem.remove();
    });
}


