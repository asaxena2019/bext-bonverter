import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./pages.css"

function alterText(message){
  let bvar = "🅱️";
  let first = message.charAt(0);
  if(first==="a" || first==="e" || first==="i" || first==="o" || first==="u"){
    message = bvar.concat(message);
    return message;
  }
  message = message.replace(message.charAt(0), "🅱️");
  return message;
}

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
      .split(' ')
      .map(alterText)
      .join(' ');
    this.setState(() => ({ message }));
  };
  displayNameHandler = () => {
    this.setState(prevState => ({ submitedMessage: prevState.message }));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>{'🅱️ext 🅱️onverter'}</title>
        </Helmet>
        <div>
          <h1><span role="img" aria-label="B">🅱️</span>ext <span role="img" aria-label="B">🅱️</span>onverter</h1>
        </div>
        <div>
        <form>
          <input type="text" name="message" onChange={this.inputChange} />
          <button type="button" onClick={this.displayNameHandler}>
          <span role="img" aria-label="B">🅱️</span>onvert <span role="img" aria-label="B">🅱️</span>our <span role="img" aria-label="B">🅱️</span>ext
          </button>
        </form>
        </div>
        <div>
          <p>
            {this.state.submitedMessage}
          </p>
        </div>
      </div>
    );
  }
}
export default Input;