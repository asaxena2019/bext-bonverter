import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./pages.css"

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      submitedMessage: ""
    };
  }

  inputChange = e => {
    let bvar = "🅱️"
    let message = e.target.value
      .split(' ')
      .map(s => s.replace(s.charAt(0), bvar))
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
        <div style={{margin: "auto", width: "15%"}}>
          <h1><span role="img" aria-label="B">🅱️</span>ext <span role="img" aria-label="B">🅱️</span>onverter</h1>
        </div>
        <div style={{margin: "auto", width: "20%"}}>
        <form>
          <input type="text" name="message" onChange={this.inputChange} />
          <button type="button" onClick={this.displayNameHandler}>
          <span role="img" aria-label="B">🅱️</span>onvert <span role="img" aria-label="B">🅱️</span>our <span role="img" aria-label="B">🅱️</span>ext
          </button>
        </form>
        </div>
        <div style={{margin: "auto", width: "5%"}}>
          <p>
            {this.state.submitedMessage}
          </p>
        </div>
      </div>
    );
  }
}
export default Input;