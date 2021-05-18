import React from 'react';
import Routing from './Routing.jsx';

class Signin extends React.Component {
  
constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
  }
}

  valid() {
    if (!this.state.email.includes("@") && this.state.password.length < 5) {
      this.setState(
        { emailError: "invalid email", passwordError: "password error" }
      )
    }
    else if (!this.state.email.includes("@")) {
      this.setState(
        { emailError: "invalid email" }
      )
    }
    else if (this.state.password.length < 5) {
      this.setState(
        { passwordError: "password error" }
      )
    }
    else{
      return true
    }
  }


  submit() {
    let obj={email:this.state.email,password:this.state.password}
    localStorage.setItem('myData',JSON.stringify(obj));

    this.setState(
      { emailError: "", passwordError: "" }

    )
    if (this.valid()) {
    
        this.props.history.push('/Home');
        
   
    }

  }

  render() {
    return (
        <div class="signin" style={{border:"2px solid gainsboro"}}>
        <Routing/>
      <div className="App">
        <h1>form validaiton</h1>
        <label>Email:</label>  <br></br>
        <input type="text" onChange={(event) => { this.setState({ email: event.target.value }) }} />
        <p style={{ color: "red", fontSize: "14px" }}>{this.state.emailError}</p>
        <label>Password:</label><br></br>
        <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
        <p style={{ color: "red", fontSize: "14px" }}>{this.state.passwordError}</p>
        <button onClick={() => this.submit()}>Submit</button>

      </div>
      </div>
    )

  }
}
export default Signin;
