// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the buttons that open the modal
// var btns = document.querySelectorAll(".openModalBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // Get the button that closes the modal inside the modal content
// var closeModalBtn = document.getElementById("closeModalBtn");

// // Loop through each button and add an event listener to open the modal
// btns.forEach(function(btn) {
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }
// });

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks the close button inside the modal, close the modal
// closeModalBtn.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");


function addTask() {
  const taskText = taskInput.value.trim();
  
  if(taskText !== ''){
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// addTaskBtn.addEventListener("click", addTask);
addTaskBtn.onclick = () => {
  addTask();
};

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});