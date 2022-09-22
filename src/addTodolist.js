import { ModalClass } from "./classes/addTodolistModalClass.js";
import { DatabaseClass } from "./classes/DatabaseClass.js";

const DBObj = new DatabaseClass();

const clockAndButton = document.querySelector('.container');
const addButton = document.querySelector('.todolist-add-button');
const modalWindow = new ModalClass();
const todolist = document.querySelector('.todolist-items');

//modalWindow안의 컴포넌트들
const addTodolistButton = modalWindow.getAddButton();
const todoListInput = modalWindow.getInput();
const closeButton = modalWindow.getCloseButton();

function makeTodoListCard(obj){

    const list = document.createElement('li');
    const contentSpan = document.createElement('span');
    const dateSpan = document.createElement('span');
    const listDeleteButton = document.createElement('button');

    list.classList.add('list-card');
    contentSpan.setAttribute('id','content');
    dateSpan.setAttribute('id','date');
    listDeleteButton.setAttribute('id','list-delete-button');

    const content = obj.content;
    const date = obj.date;

    function listDeleteEvent(e){
        e.target.parentNode.remove();
        DBObj.delete(content);
        console.log(DBObj.inquire());
    }

    contentSpan.innerText=content;
    dateSpan.innerText=date;

    listDeleteButton.addEventListener('click',listDeleteEvent);

    list.appendChild(contentSpan);
    list.appendChild(dateSpan);
    list.appendChild(listDeleteButton);

    todolist.appendChild(list);
}

function modalOpenEvent(){
    modalWindow.open();
    clockAndButton.classList.add('hide');
}

function modalCloseEvent(){
    modalWindow.close();
    clockAndButton.classList.remove('hide');
    todoListInput.value='';
}
function todolistAddEvent(){

    todolist.innerHTML = '';
    const today = new Date();

    const content = todoListInput.value;
    const date= `${today.getFullYear()%1000}/${today.getMonth()+1}/${today.getDate()}`;

    DBObj.save(content,date);

    const db = DBObj.inquire();

    for(let i in db){
        makeTodoListCard(db[i]);
    }
}

addButton.addEventListener('click',modalOpenEvent);
closeButton.addEventListener('click',modalCloseEvent);
addTodolistButton.addEventListener('click',todolistAddEvent);
