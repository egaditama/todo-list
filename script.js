const input = document.querySelector(".input-box input");
const submitBtn = document.querySelector(".input-box button");
const container = document.querySelector("main .container");


const doneCount = document.querySelector(".progress .done span");
const ongoingCount = document.querySelector(".progress .ongoing span");



function createTodo(text){
    const todo = document.createElement("div");
    todo.className = "todo-item ongoing";

    todo.innerHTML = 
    `
    <button class="check-btn" aria-label="Mark as done">
        <i class="fa-regular fa-circle"></i>
    </button>
          
    <span class="task-text">${text}</span>
    
    <div class="actions">
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
     </div>
    `;

    container.appendChild(todo);
}

function updateCount(){
    const doneTodos = document.querySelectorAll(".todo-item.done").length;
    const ongoingTodos = document.querySelectorAll(".todo-item.ongoing").length;

    doneCount.textContent = doneTodos;
    ongoingCount.textContent = ongoingTodos;
}


submitBtn.addEventListener("click", ()=> {
    const value = input.value.trim();

    if(!value) return;
    
    createTodo(value);
    input.value = "";
    updateCount();
});


container.addEventListener("click", (e) => {
    const todo = e.target.closest(".todo-item");
    if (!todo) return;

    //check button
    if(e.target.closest(".check-btn")){
        todo.classList.toggle("done");
        todo.classList.toggle("ongoing");

        const icon = todo.querySelector(".check-btn i");
        icon.classList.toggle("fa-circle-check");
        icon.classList.toggle("fa-circle");
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
    }

    if (e.target.closest(".delete")) {
            todo.remove();
        }

    updateCount();
});



updateCounter(); // load count