import React from "react";
import { ACTIONS } from "./App";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

function ToDo({ todo, dispatch }) {
	return (
		<div>
			<span style={{ color: todo.complete ? "#AAA" : "#000" }}>
				{todo.name}
			</span>
			<Button
				startIcon={<CheckIcon />}
				variant="outlined"
				color="primary"
				onClick={() =>
					dispatch({
						type: ACTIONS.TOGGLE_TODO,
						payload: { id: todo.id }
					})
				}
			>
				Toggle
			</Button>
			<Button
				startIcon={<DeleteIcon />}
				variant="outlined"
				color="secondary"
				onClick={() =>
					dispatch({
						type: ACTIONS.DELETE_TODO,
						payload: { id: todo.id }
					})
				}
			>
				Delete
			</Button>
		</div>
	);
}

export default ToDo;
