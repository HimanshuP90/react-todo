import React from 'react';
import PropTypes from 'prop-types';

const DoubleClick = props => {
	console.log(props.add);
	return (
		<div>
		<h1>{props.myProps}</h1>
		</div>
	);
}

DoubleClick.propTypes = {
	myProps: PropTypes.array.isRequired
}

DoubleClick.defaultProps = {
	myProps: "himanshu"
}

export default DoubleClick;