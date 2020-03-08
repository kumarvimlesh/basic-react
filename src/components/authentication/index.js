import React,{Component} from 'react';
import './style.css'; 
import DashboardIcon from './user_avtar.png'
import Login from './login.js';
import Register from './register.js';

class Authenticaton extends Component{
    constructor(props){
    	super(props);
    }

    renderDashboard(){
    	return(
    		<div className="dashboard">
			    <button className="dashboard-button"><img src={DashboardIcon} height="60" width="60" /></button>  
			</div>
    	);
    }
    renderLoginRegisterbutton(){
    	return(
    		<div className="buttons">
                <button className="btn btn-primary button" onClick="gotologin()">Login In</button>
                <button className="btn btn-warning button" onClick="gotoregister()">Register</button>
            </div>
    	);
    }

	render(){
		return(
     <div>
			<div className="authenticaton">
			   <div className="homepage">
			       {this.renderDashboard()}
                   <div className="main-heading">
                       <p className="quote-head">I am persuing engineering in NIT Delhi<br/>
                       <div className="quote"><q>You have brains in your head
                       You have feet in your shoes. You can steer yourself any direction you 
                       hoose. You are on your own. And you know what you know. And YOU are the 
                       ne who will decide where to go...
                       <br/> <i>-Dr. Seuss</i></q>
                       </div>
                       </p>
                       {this.renderLoginRegisterbutton()}
                   </div>
			   </div>
			</div>
      <br/><br/>
      <Login/>
      <br/><br/>
      <Register />
     </div>
		);
	}
}

export default Authenticaton;