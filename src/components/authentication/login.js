import React,{Component} from 'react';

class Login extends Component{

    constructor(props){
    	super(props);
    	this.state={
           username:'',
           password:''
    	};
    }
    
    componentDidMunt(){
   
    }

	render(){
		return(
			<div id="login" className="Login">
			   <div className="container-fluid loginbody">
			     <div className="row">
			        <div className="col-sm-8">
                       <div className="loginform">
                         <div className="form">
                            <form>
                               <div className="">
                                  <h1>Log In</h1>
                               </div>
                               <div className="container-fluid">
                                  <label className="col-sm-12 form-group" htmlfor="username"><b>UserName</b></label>
                                  <input className="col-sm-12 form-group" type="text" name="username" placeholder="Enter UserName"/>
                               </div>
                               <div className="container-fluid">
                                  <label className="col-sm-12 form-group" htmlfor="password"><b>Password</b></label>
                                  <input className="col-sm-12 form-group" type="password" name="password" placeholder="Enter Password"/>
                               </div>
                               <div className="container-fluid">
                                  <input className="form-group" type="checkbox" value="remeber" name="remeber"/>
                                  <label htmlfor="remeber" >Remeber Me</label>
                               </div>
                               <div className="container-fluid">
                                  <button className="col-sm-12 btn btn-primary" type="submit" name="submit">Log In</button>
                               </div>
                               <div className="container-fluid">
                                  <span className="col-sm-12">Forgot <a href="#"><i>Password?</i></a></span>
                               </div>
                            </form>
                         </div>
                       </div>
			        </div>
			        <div className="col-sm-4">
			          <div className="loginsidebar">
                         <h2>New User?</h2>
                         <a href="#register"><h4><i>Register</i></h4></a>
                         <p>It is better to lead from behind and to put others in front, 
                          especially when you celebrate victory when nice things occur.
                          You take the front line when there is danger. Then people will 
                          appreciate your leadership.</p>
                         <button className="btn btn-primary" type="submit">Register</button>
			          </div>
			        </div>
			     </div>
			   </div>
			</div>
		);
	}
}

export default Login;
