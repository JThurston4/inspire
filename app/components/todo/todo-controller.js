import TodoService from "./todo-service.js";



var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	//BUILD YOUR TODO TEMPLATE HERE
	var template = ''
	for (let i = 0; i < todos.length; i++) {
		let checked = ''
		if (todos[i].completed) {
			checked = "checked"
		}
		template += `
		<div class="form-check">
    <input type="checkbox" class= form-check-input" ${checked}onchange="app.controllers.todoCtrl.toggleTodoStatus('${todos[i]._id}')">
		<label class="form-check-label">${todos[i].description} <i class="fas fa-trash-alt" style="color: #2a2a2a; text-shadow:none" onclick="app.controllers.todoCtrl.removeTodo('${todos[i]._id}')"></i></label>
	</div>`

	}
	document.getElementById("todo").innerHTML = template
	//DONT FORGET TO LOOP
}


export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again

	hi() {
		console.log("checkkkkk")
	}
	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: form.added.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		console.log(todo)
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		console.log(todoId)
		todoService.removeTodo(todoId, getTodos)
		// ask the service to run the remove todo with this id
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}




// toggleTodoStatus(todoId) {
// 	// asks the service to edit the todo status
// 	todoService.toggleTodoStatus(todoId, getTodos)
// 	// YEP THATS IT FOR ME
// }