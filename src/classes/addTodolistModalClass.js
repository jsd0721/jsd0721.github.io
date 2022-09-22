export class ModalClass{
    constructor(){

        this.app = document.querySelector(".app");

         //모달창
        this.todoListModalComponent = document.createElement("div");
        this.todoListModalComponent.classList.add('modal-window-for-todolist-add');

        //타이틀
        this.todoListTitleComponent = document.createElement("h1");
        this.todoListTitleComponent.classList.add('title');
        this.todoListTitleComponent.innerHTML='Add Todolist';

        //모달창 닫기 버튼
        this.todoListModalCloseComponent = document.createElement('button');
        this.todoListModalCloseComponent.classList.add('close-button');
        this.todoListModalCloseComponent.setAttribute('id',"close-modal");
        this.todoListModalCloseComponent.innerHTML='X';

        //input컨테이너
        this.inputContainerComponent = document.createElement('div');
        this.inputContainerComponent.classList.add("input-container");

        //input창
        this.inputComponent = document.createElement('input');
        this.inputComponent.setAttribute('type',"text");
        this.inputComponent.classList.add('todo-list-input');

        //추가 버튼
        this.addButtonComponent = document.createElement('button');
        this.addButtonComponent.classList.add('todolist-add-button');
        this.addButtonComponent.innerText="ADD";  

        this.inputContainerComponent.appendChild(this.inputComponent);
        this.inputContainerComponent.appendChild(this.addButtonComponent);
        this.todoListModalComponent.appendChild(this.todoListTitleComponent);
        this.todoListModalComponent.appendChild(this.todoListModalCloseComponent);
        this.todoListModalComponent.appendChild(this.inputContainerComponent);
    }

    open(){
        this.app.appendChild(this.todoListModalComponent);
    }

    close(){
        this.todoListModalComponent.remove();
    }

    getAddButton(){
        return this.addButtonComponent;
    }
    getInput(){
        return this.inputComponent;
    }
    getCloseButton(){
        return this.todoListModalCloseComponent;
    }
}