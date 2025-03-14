import {useState} from 'react';
import Button from './Button';

const dataInicial = [
	{id:0, task:'Compras', toDo:false},
	{id:1, task:'Entrenar', toDo:false},
	{id:2, task:'Desayunar', toDo:true}
];
let nextId = 3;

export default function ToDoList(){
	const[toDoTasks, setToDoTasks] = useState(dataInicial);
	const[name, setName] = useState('');
	function addTask(){
		setToDoTasks(
			[
				...toDoTasks,
				{
					id:nextId++,
					task: name,
					toDo: false
				}
			]
		);
		setName('');
	}

	function deleteTask(id){
		const nextToDoTasks = toDoTasks.filter(
			t => (t.id !== id)
		)
		setToDoTasks(nextToDoTasks);
	}

	function markTask(id){
		setToDoTasks(toDoTasks.map(t=>{
			if (t.id === id){
				return {
					...t,
					toDo:!t.toDo
				}
			}
			else{
				return t;
			}
		}))
	}

	return (
		<>
			<h1>ToDoList</h1>
			<input
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<Button onClick={addTask}>Add</Button>
			<ul>
				{toDoTasks.map(task =>
					<li key={task.id}>
						<input
							type='checkbox'
							checked={task.toDo}
							onChange={()=>markTask(task.id)}
						/>
						{task.task}
						<Button onClick={()=>deleteTask(task.id)}>Delete</Button>
					</li>
				)}
			</ul>
		</>
	)
}