import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "" 
    };
  }
  updateUsername = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  
  submitForm = (e) => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password 
    // let dataArray = this.state.submittedData.concat(formData)
    this.props.handleLogin({username, password})
  }
  render() {
    return (
      <form onSubmit = {this.submitForm} >
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              onChange={event => this.updateUsername(event)} 
              value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password"
              onChange={event => this.updateUsername(event)} 
              value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
