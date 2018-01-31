import React, { Component } from "react";

class Dropdowns extends Component {
	render(){
		return(
			<div className="dropdown container">
			 <button 
			 	className="btn btn-primary dropdown-toggle"
			 	type="button"
			 	data-toggle="dropdown"
			 >Dropdown</button>
			 <ul className="dropdown-menu">
			 	<li><a>MobX</a></li>
			 	<li><a>React.js</a></li>
			 	<li><a>Redux</a></li>
			 	<li><a>Node.js</a></li>
			 	<li><a>HTML5</a></li>
			 	<li><a>CSS3</a></li>
			 	<li><a>JavaScript</a></li>
			 	<li><a>ES6</a></li>
			 </ul>
			</div>
		);
	}
}

export default Dropdowns;