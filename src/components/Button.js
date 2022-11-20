import { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type={this.props.type} value={this.props.type}>
        {this.props.value}
      </button>
    );
  }
}
