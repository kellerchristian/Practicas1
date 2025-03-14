import {useState} from 'react';
import Button from './Button';


export default function Counter(){
	const[counter,setCounter] = useState(0);
	function sumConter(){
		setCounter(counter + 1)
	}


	return (
		<>
			<Button onClick={sumConter}>
				+
			</Button>
			<>[{counter}]</>
			<Button onClick={()=>setCounter(counter - 1)}>
				-
			</Button>
		</>
	)
}

