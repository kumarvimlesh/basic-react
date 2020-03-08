import React,{Component} from 'react';

class Increment extends Component{
	constructor(){
		super();
		this.state={
           count:0
		};
	}
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
	render(){
		return(
           <div className="Increment">
              <h3>Incrementing Number</h3>
              <button onClick={this.increment}>Increment</button>
              {this.state.count}
           </div>
	    );
	}
}

export default Increment;