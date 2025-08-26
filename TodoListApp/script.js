let list=document.querySelector('.todo-list');
let inputBox=document.querySelector('.todo-input input');
let addBtn=document.querySelector('.todo-input button');


const saveTodos = () => {
    localStorage.setItem("todos", list.innerHTML);
};

// ✅ Load todos from localStorage
const loadTodos = () => {
    const data = localStorage.getItem("todos");
    if (data && data.trim() !== "") {
        list.innerHTML = data;
    }
};

const addItems=(e)=>{
    e.preventDefault();

    const inputValue=inputBox.value.trim();
    if(inputValue!==''){
        const html=`<div class="todo-item">
                    <div class="todo-item-left">
                        <input type="checkbox" class="mark-complete" >
                        <p class="todo-text">${inputValue}</p>
                    </div>
                    <div class="todo-item-right">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>`;
        list.insertAdjacentHTML('beforeend',html);
        inputBox.value='';
        saveTodos();
    }
}

addBtn.addEventListener('click',addItems);


list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-btn')){
        e.target.closest('.todo-item').remove();
        saveTodos();
    }

    if(e.target.classList.contains('edit-btn')){
        const text=e.target.closest('.todo-item').querySelector('.todo-text');
        inputBox.value=text.textContent;
        e.target.closest('.todo-item').remove();
        saveTodos();
        inputBox.focus();
    }
});

list.addEventListener('change',(e)=>{
    if(e.target.type==='checkbox' && e.target.checked===true){
        e.target.closest('.todo-item').querySelector('.todo-text').style.textDecoration='line-through';
        saveTodos();
    }else{
        e.target.closest('.todo-item').querySelector('.todo-text').style.textDecoration='none';
        saveTodos();
    }
});


window.addEventListener('DOMContentLoaded', loadTodos);