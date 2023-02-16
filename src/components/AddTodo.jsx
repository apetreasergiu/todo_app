import { useState } from "react";

function AddTodo({ onAddTodo }) {
	const [todoText, setTodoText] = useState("");
	return (
		<>
			<h3>Add new ToDo:</h3>
			<input
				type='text'
				value={todoText}
				onChange={(e) => {
					setTodoText(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					onAddTodo(todoText);
				}}>
				Add!
			</button>
		</>
	);
}

export default AddTodo;
