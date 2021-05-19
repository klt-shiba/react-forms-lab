import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      character: 0,
      maxChar: props.maxChars
    };
  }
  countChar = (e) => {
    this.setState({
      character: e.target.value.length
    })
    console.log(e.target.value.length)  
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message"
          onChange={event => this.countChar(event)}/>
        <div>Remaining Characters {this.state.maxChar - this.state.character}</div>
      </div>
    );
  }
}

export default TwitterMessage;
