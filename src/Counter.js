import React, { Component } from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer class Counter extends Component {
	@observable count = 0;
	
	handleDec = () => {
		this.count--;
	}

	handleInc = () => {
		this.count++;
	}

	render(){
		return(
			<div className="container">
				Counter: {this.count} <br />
				<button 
					className="btn btn-danger btn-sm" 
					onClick={this.handleDec}>-</button> &nbsp;
				<button 
					className="btn btn-success btn-sm" 
					onClick={this.handleInc}>+</button>
			</div>
		);
	}
}

export default Counter;