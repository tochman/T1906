import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    return (
      <>
        {this.state.clickCount}
        <button type="button" onClick={this.handleClick.bind(this)}>
          Increment
        </button>
      </>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("app"));
