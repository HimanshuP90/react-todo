import React from 'react';

// class SingleToDo extends React.Component {
// 	constructor() {
// 		super();
// 	}

// 	render(){
// 		return(
// 			<li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
// 		);
// 	}
// }

const SingleToDo = props => {
	console.log(props);
	return(
		<li>{props.todo}<button onClick={props.delete}>X</button></li>
	);
}
export default SingleToDo;