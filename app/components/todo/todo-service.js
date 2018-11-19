let todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/JoshThurston/todos',
	timeout: 3000
});

let todoID = ':todoId'

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then(res => {
				console.log(res.data.data)
				todoList = res.data.data
				console.log(todoList)
				draw(todoList)
			})
		// .catch(logError)
	}

	addTodo(todo, todoCallback) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(res => {
				// console.log(todo)
				// console.log(res.data)
				// console.log(res.data.data)
				todoCallback()
			}) // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
		// .catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var todo = {} ///MODIFY THIS LINE
		for (let i = 0; i < todoList.length; i++) {
			if (todoList[i]._id == todoId) {
				todo = todoList[i]
				todoList[i].completed = !todoList[i].completed
				console.log(todo)
			}
		}
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				getTodos()
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
		// .catch(logError)
	}

	removeTodo(todoId, getTodos) {
		// Umm this one is on you to write.... The method is a DELETE
		todoApi.delete(todoId)
			.then(res => {
				getTodos()
			}
			)
	}
}