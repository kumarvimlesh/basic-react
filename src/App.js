import React,{Component} from 'react';
import './App.css';
import Hello from './components/helloworld';
import Increment from './components/increment';
import ToDo from './components/ToDoApp/todoapp.js';
import Authentication from './components/authentication/index.js';

class App extends Component{
        
	render(){
        return(
        	<div className="App">
        	    <h1>Some Components</h1>
        	    <hr/>
        	    <Hello />
        	    <hr/>
        	    <Increment />
        	    <hr/>
        	    <ToDo />
        	    <hr/>
                <Authentication />
                <hr/>
        	</div>
        );
	}
}

export default App;