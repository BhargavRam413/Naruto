let taskele = document.getElementById('taskinfo');
let taskelist = document.getElementById('tasklist');

document.getElementById('add').onclick = function() {
   if (taskele.value.length == 0) {
       alert('Enter a task');
   } else {
       // Add new task with a delete button
       taskelist.innerHTML += `<div class='task'>
           <span id='work'>${taskele.value}</span>
           <button class='del'><i class='fa fa-trash'></i></button>
       
        </div>`;
       // Add event listener to each delete button
       let alltasks = document.querySelectorAll('del');
       for (let i = 0; i < alltasks.length; i++) {
           alltasks[i].onclick = function() {
               this.parentNode.remove(); // Remove the task when delete is clicked
              
           };
       }
       taskele.value = ''; // Clear the input field after adding the task
   }
};
