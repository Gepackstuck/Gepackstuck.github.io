let value = document.getElementById('value'),
    btn = document.getElementById('btn'),
    todos = document.getElementById('ultodos'),
    delall = document.getElementById('delall');
let history = document.getElementById('history');

function Todo() {
if (value.value != ""){    
    let todo = document.createElement('li');
    todo.setAttribute('class', "todo");
    todo.innerHTML = value.value;
    todos.append(todo);
    value.value = '';
    // let edit = document.createElement("button");
    // todos.append(edit);

todo.addEventListener('click', function h(){
    let val = todo.innerText;
    let historytodo = document.createElement('li');
    historytodo.innerHTML = val;
    history.prepend(historytodo);
    todos.removeChild(todo);
    // todos.removeChild(edit);
})
}  
}
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

function clockTimer()
{
  let date = new Date();
  
  let time = [date.getHours(),date.getMinutes(),date.getSeconds()];
  let dayOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
  let days = date.getDay();
  
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  let current_time = [time[0],time[1],time[2]].join(':');
  let clock = document.getElementById("time");
  let day = document.getElementById("dayOfWeek");
  
  clock.innerHTML = current_time;
  day.innerHTML = dayOfWeek[days];
  
  
  
  setTimeout("clockTimer()", 1000);
}