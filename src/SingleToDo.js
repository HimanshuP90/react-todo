import React from 'react';

const SingleToDo = props => {
	return(
		<div>
			<li>{props.todo}<button onClick={props.delete}>X</button></li>
		</div>
	);
}
export default SingleToDo;