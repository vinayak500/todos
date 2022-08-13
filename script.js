const form = document.getElementById('form')
var input = document.getElementById('input');
var task_container = document.getElementById('task-container');


form.addEventListener('submit' , function(event){
  

   event.preventDefault();

//    var div = document.createElement('div');
//       console.log(input.value);
//       div.innerHTML = input.value;
            
//       task_container.appendChild(div);


var task = document.createElement('div');
task.innerHTML =input.value;

task_container.appendChild(task);


      input.value="";


      


});