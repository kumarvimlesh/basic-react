import React,{Component} from 'react';
import './todoapp.css';
import SingleToDo from './todo_single.js';

class ToDo extends Component{
	constructor(){
		super();
		this.state={
           todos:[],
           currentToDo:""
		};
	}
	deleteToDo=i=>{
		let todosCopy=this.state.todos.slice();
		todosCopy.splice(i,1);
		this.setState({todos:todosCopy});
	}
	addtodo=e=>{
		this.setState({currentToDo:e.target.value});
	}
	onClick=()=>{
		let todosCopy=this.state.todos.slice();
        todosCopy.push(this.state.currentToDo);
        this.setState({todos:todosCopy,currentToDo:""});
	}
	render(){
		let todosBullet=this.state.todos.map((e,i)=>{
           return(
             <SingleToDo todo={e} delete={()=>this.deleteToDo(i)} />
           );
		});
		return(
           <div className="ToDoApp">
              <h3>To Do Application</h3>
              <div className="todobody">
                 {this.state.todos.length ==0 ?"No ToDo!":"Your ToDo's"}
                 {todosBullet}
                 <br/>
                 <input placeholder="Enter ToDo" value={this.state.currentToDo} 
                 onChange={this.addtodo}/>
                 <button onClick={this.onClick}>Add</button>
              </div>
           </div>
		);
	}
}

export default ToDo;