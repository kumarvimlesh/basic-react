import React,{Component} from 'react';
  
class Register extends Component{
	constructor(props){
		super(props);
		this.state={

		}
	}

    componentDidMunt(){
    
    }
 
	render(){
		return(
			<div id="register" className="Register">
			   <div className="container-fluid loginbody">
			     <div className="row">
			        <div className="col-sm-8">
                       <div  className="registrationform">
                         <div className="form">
                            <form>
                               <div className="">
                                  <h1>Register</h1>
                               </div>
                               <div className="container-fluid">
                                  <label className="col-sm-12 form-group" htmlfor="name"><b>Full Name</b></label>
                                  <input className="col-sm-12 form-group" type="text" name="name" placeholder="Enter Name"/>
                               </div>
                               <div className="container-fluid">
                                  <label className="col-sm-12 form-group" htmlfor="email"><b>Email</b></label>
                                  <input className="col-sm-12 form-group" type="text" name="email" placeholder="Enter Email"/>
                               </div>
                               <div className="container-fluid">
                                  <label className="col-sm-12 form-group" htmlfor="phone"><b>Phone Number</b></label>
                                  <input className="col-sm-12 form-group" type="tel" name="phone" placeholder="Enter Phone Number"/>
                               </div>
                               <div className="container-fluid">
                                  <label className="col-sm-12 form-group" htmlfor="password"><b>Create Password</b></label>
                                  <input className="col-sm-12 form-group" type="password" name="password" placeholder="Create Your Password"/>
                               </div>
                               <div className="container-fluid">
                                  <button className="col-sm-12 btn btn-primary" type="submit" name="submit">Register</button>
                               </div>      
                            </form>
                         </div>
                       </div>
			        </div>
			        <div className="col-sm-4">
			          <div className="loginsidebar">
                         <h2>Already Register?</h2>
                         <a href="#login"><h4><i>LogIn</i></h4></a>
                         <p>It is better to lead from behind and to put others in front, 
                          especially when you celebrate victory when nice things occur.
                          You take the front line when there is danger. Then people will 
                          appreciate your leadership.</p>
                         <button className="btn btn-primary" type="submit">LogIn</button>
			          </div>
			        </div>
			     </div>
			   </div>
			</div>
		);
	}
}
export default Register;