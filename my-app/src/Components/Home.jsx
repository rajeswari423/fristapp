import React, { Component } from 'react';

class Home extends Component{

    submit() {
        localStorage.removeItem('myData');
        this.props.history.push('/')
    }
    render(){
return(
<div>
<h1>{this.props.email }Home is WELCOMING you ;!!!!!</h1>
<button onClick={() => this.submit()}>Logout</button>
</div> ) }
};
 export default Home;