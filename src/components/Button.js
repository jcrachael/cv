import { Component } from "react";

// This is the Button component
// Props:
// this.props.type is 'submit' or 'button'
// this.props.value is the button's text
// this.props.onClick is the handleClick event listener declared in Main
export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type={this.props.type}
        value={this.props.type}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
