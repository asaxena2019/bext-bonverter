import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      submitedMessage: ""
    };
  }

  inputChange = e => {
    let message = e.target.value
      .toLowerCase()
      .split(' ')
      .map(s => s.replace(s.charAt(0), "🅱️"))
      .join(' ');
    this.setState(() => ({ message }));
  };
  displayNameHandler = () => {
    this.setState(prevState => ({ submitedMessage: prevState.message }));
  };

  render() {
    return (
      <div>
        <p></p>
        <form>
          <input type="text" name="message" onChange={this.inputChange} />
          <button type="button" onClick={this.displayNameHandler}>
            Submit
          </button>
          <p>
            {this.state.submitedMessage}
          </p>
        </form>
      </div>
    );
  }
}
export default Input;