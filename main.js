const todolist = [{ name:'Make dinner',
                    dueDate:'2022-12-22'},
                  { name:'wash dishes',
                    dueDate:'2022-12-27'
                  }];

renderToDoList();


function renderToDoList(){

let todolistHTML ='';
 for(let i = 0; i< todolist.length; i++){
  const todoObject = todolist[i];
  const name = todoObject.name;
  const dueDate = todoObject.dueDate;
  const html = `<div>${name}</div> <div>${dueDate}</div> <button onclick ="
    todolist.splice(${i},1);
    renderToDoList();
  " class ="delete-button">Delete</button>`;
  todolistHTML+= html;


 }
 
 document.querySelector('.result').innerHTML= todolistHTML;
  }
function addTodo(){
  const inputElement =document.querySelector('.todoname');
  let name = inputElement.value;
   const dateInput = document.querySelector('.due-date');
   const duedate= dateInput.value;

  todolist.push({name:name,
                 dueDate:duedate
  });     
  
  inputElement.value ='';
  renderToDoList();
}  
