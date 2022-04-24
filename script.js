let value = document.getElementById('value'),
    btn = document.getElementById('btn'),
    todos = document.getElementById('ultodos'),
    delall = document.getElementById('delall'),
    history = document.getElementById('history');
//LocalStorage
    let todolist = document.querySelectorAll('ul');
let localtodos;
let localhistory;
//LocalStorage
// function todoLocal() {
//     localtodos=todolist[0].innerHTML;
//     localStorage.setItem("localtodos", localtodos);
// }
function todoHistory() {
    localhistory=todolist[1].innerHTML;
    localStorage.setItem("localhistory", localhistory);
}
function Todo() {
    if (value.value != ""){    
        let todo = document.createElement('li');
        let del = document.createElement('button');
        let delicon = document.createElement('i');
            delicon.setAttribute("class", "fa fa-ban");
            del.setAttribute("id", "del");
            del.setAttribute("class", "delbtn");
        let edit = document.createElement('button');
        let editicon = document.createElement('i');
            editicon.setAttribute("class", "fa fa-pencil-square-o");
            edit.setAttribute("id", "edit");
            edit.setAttribute("class", "editbtn");
        let done = document.createElement('button');
        let doneicon = document.createElement('i');
            doneicon.setAttribute("class", "fa fa-check");
            done.setAttribute("class", "donebtn");
            todo.setAttribute('class', "todo");
        todo.innerHTML = value.value;
            todos.append(todo);
        value.value = '';
            todo.append(edit);
            todo.append(del);
            todo.prepend(done);
            done.append(doneicon);
            edit.append(editicon);
            del.append(delicon);
            
        edit.addEventListener('click', function edit(){
            let save = document.createElement('button');
                save.setAttribute("id", "save");
                save.setAttribute("class", "savebtn");
            let saveicon = document.createElement('i');
                saveicon.setAttribute("class", "fa fa-floppy-o");
            let editinput = document.createElement('input');
                editinput.setAttribute("id", "editinput");
                editinput.setAttribute("class", "editinput");
            editinput.type = 'text';
               todo.append(editinput);
               todo.append(save);
               save.append(saveicon);
            let inputval = todo.childNodes[1].textContent;
                
            editinput.value = inputval;
            todo.children.edit.style.display = 'none';
            todo.children.del.style.display = 'none';
                save.addEventListener('click', function editto(){
                    todo.childNodes[1].textContent = editinput.value;
                    todo.children.save.remove();
                    todo.children.editinput.remove();
                    todo.children.edit.style.display = 'inline-block';
                    todo.children.del.style.display = 'inline-block';
                    
                })
                editinput.focus();
        })
        del.addEventListener('click', function del(){
            todos.removeChild(todo);
            
        })
            done.addEventListener('click', function h(){
                let val = todo.childNodes[1].textContent;
                let historytodo = document.createElement('li');
                    historytodo.setAttribute("class", "historyli");
                    historytodo.innerHTML = val;
                        history.prepend(historytodo);
                        todos.removeChild(todo);
                        todoHistory();
                        
            })
        if (todos.querySelectorAll('li').length != 0) {
            document.getElementById('delall').disabled = false;
        } else {
            document.getElementById('delall').disabled = true;
        }
        
    }  
    
}

// Delete element
delall.addEventListener('click', function delall(){
    let que = confirm ('Точно?');
    let todolength = todos.querySelectorAll('li').length;
        if (que === true){
            for (let i = todolength; i >= 1; i--){
            document.querySelector("#ultodos > li:nth-child("+ i +")").remove();
            
            }
        }

})
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn").click();
    }
});
// DATE and TIME
function clockTimer() {
    let date = new Date();
    let time = [date.getHours(),date.getMinutes(),date.getSeconds()];
        if(time[0] < 10){time[0] = "0"+ time[0];}
        if(time[1] < 10){time[1] = "0"+ time[1];}
        if(time[2] < 10){time[2] = "0"+ time[2];}
    let current_time = [time[0],time[1],time[2]].join(':');
    let clock = document.getElementById("time");
        clock.innerHTML = current_time;
  setTimeout("clockTimer()", 1000);
}
function d() {
    let date = new Date();
    let dayOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
    let days = date.getDay();
    let day = document.getElementById("dayOfWeek");
        day.innerHTML = dayOfWeek[days];
}
//LocalStorage
// if(localStorage.getItem("localtodos")) {
//     todolist[0].innerHTML = localStorage.getItem("localtodos");
// }
// if(localStorage.getItem("localhistory")) {
//     todolist[1].innerHTML = localStorage.getItem("localhistory");
// }