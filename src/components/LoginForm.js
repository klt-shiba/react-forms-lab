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
      username: e.target.value
    })
    console.log(e.target.value)
  }

  updatePassword = (e) => {
    this.setState({
      password: e.target.value
    })
    console.log(e.target.value)
  }

  render() {
    return (
      <form onSubmit = {this.props.handleLogin} >
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
              onChange={event => this.updatePassword(event)} 
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
