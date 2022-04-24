let value = document.getElementById('value'),
    btn = document.getElementById('btn'),
    todos = document.getElementById('ultodos'),
    delall = document.getElementById('delall'),
    history = document.getElementById('history');
function Todo() {
    if (value.value != ""){    
        let todo = document.createElement('li');
        let del = document.createElement('button');
        del.innerText = 'delete';
        del.setAttribute("id", "del");
        let edit = document.createElement('button');
        edit.setAttribute("id", "edit");

        edit.innerText = 'edit';
        let done = document.createElement('button');
        done.innerText = 'done';
        todo.setAttribute('class', "todo");
        todo.innerHTML = value.value;
        todos.append(todo);
        value.value = '';
        todo.append(edit);
        todo.append(del);
        todo.prepend(done);
        edit.addEventListener('click', function edit(){
            let save = document.createElement('button');
            save.setAttribute("id", "save");
            let editinput = document.createElement('input');
            editinput.setAttribute("id", "editinput");
            editinput.type = 'text';
            save.innerText = 'save';
            todo.append(save);
            let inputval = todo.childNodes[1].textContent;
            todo.append(editinput);
            editinput.value = inputval;
            todo.children.edit.style.display = 'none';
            todo.children.del.style.display = 'none';
                save.addEventListener('click', function editto(){
                    todo.childNodes[1].textContent = editinput.value;
                    todo.children.save.remove();
                    todo.children.editinput.remove();
                    todo.children.edit.style.display = 'block';
                    todo.children.del.style.display = 'block';
                    // todo.append(edit);
                    // todo.append(del);
                    // todo.append(edit);
                })
        })

        del.addEventListener('click', function del(){
            todos.removeChild(todo);
        })
            done.addEventListener('click', function h(){
                let val = todo.childNodes[1].textContent;
                let historytodo = document.createElement('li');
                    historytodo.innerHTML = val;
                    history.prepend(historytodo);
                    todos.removeChild(todo);
            })
            del.addEventListener('click', function h(){
                
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