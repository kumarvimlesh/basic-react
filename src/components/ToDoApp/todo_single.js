import React,{Component} from 'react';
import './todoapp.css';

class SingleToDo extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="SingleToDo">
			    <li>{this.props.todo} <button onClick={this.props.delete}> remove</button></li>
			</div>
		);
	}
}

export default SingleToDo;