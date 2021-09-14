import React, { useState, useReducer } from "react";
import ToDo from "./ToDo";

export const ACTIONS = {
	ADD_TODO: "add-todo",
	TOGGLE_TODO: "toggle-todo",
	DELETE_TODO: "delete-todo"
};

function reducer(todos, action) {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, newToDo(action.payload.name)];
		case ACTIONS.TOGGLE_TODO:
			/* eslint-disable-next-line */
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
		case ACTIONS.DELETE_TODO:
			return todos.filter((todo) => todo.id !== action.payload.id);
		default:
			return todos;
	}
}

function newToDo(name) {
	return { id: Date.now(), name: name, complete: false };
}

export default function App() {
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
		setName("");
	}

	// console.log(todos);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
			{/* eslint-disable-next-line */}
			{todos.map((todo) => {
				return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />;
			})}
		</div>
	);
}
