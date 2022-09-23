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


//투두리스트 보여주기
function makeTodoListCard(obj){

    const list = document.createElement('li');
    const contentSpan = document.createElement('span');
    const dateSpan = document.createElement('span');
    const listDeleteButton = document.createElement('button');

    list.classList.add('list-card');
    contentSpan.setAttribute('id','content');
    dateSpan.setAttribute('id','date');
    listDeleteButton.setAttribute('id','list-delete-button');

    function listDeleteEvent(e){
        e.target.parentNode.remove();
        console.log(obj.id);
        DBObj.delete(obj.id);
    }

    contentSpan.innerText=obj.content;
    dateSpan.innerText=obj.date;

    listDeleteButton.addEventListener('click',listDeleteEvent);

    list.appendChild(contentSpan);
    list.appendChild(dateSpan);
    list.appendChild(listDeleteButton);

    todolist.appendChild(list);
}

function getFunction(){
    const db = DBObj.get();
    for(let i in db){
        console.log(db[i]);
        makeTodoListCard(db[i]);
    }
}

//todolist add버튼 눌렀을 때 동작
function modalOpenEvent(){
    modalWindow.open();
    clockAndButton.classList.add('hide');
}


//x버튼 눌렀을 때 동작
function modalCloseEvent(){
    modalWindow.close();
    clockAndButton.classList.remove('hide');
    todoListInput.value='';
}

//팝업창에서 ADD버튼 눌렀을 때 동작
function todolistAddEvent(){

    todolist.innerHTML = '';
    const today = new Date();

    const content = todoListInput.value;
    const date= `${today.getFullYear()%1000}/${today.getMonth()+1}/${today.getDate()}`;

    DBObj.save(content,date);
    getFunction();

    document.querySelector('.todo-list-input').value = '';
}

addButton.addEventListener('click',modalOpenEvent);
closeButton.addEventListener('click',modalCloseEvent);
addTodolistButton.addEventListener('click',todolistAddEvent);

getFunction();
