//extensão
//ES7+ React/Redux/React-Native snippets
//rafce + tab
import React, { useState } from 'react';

const Todo = ({ todo, completeTodo, removeTodo }) => {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
		>
			<div className="content">
				<p className="text">{todo.text}</p>
				<p className="category">({todo.category})</p>
			</div>
			<div className="buttons">
				<button
					className="warning"
					onClick={() => completeTodo(todo.id)}
				>
					Completar
				</button>
				<button className="delete" onClick={() => removeTodo(todo.id)}>
					x
				</button>
			</div>
		</div>
	);
};

export default Todo;
