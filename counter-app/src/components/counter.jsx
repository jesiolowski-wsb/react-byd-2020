import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 3,
    imgUrl: "https://picsum.photos/200",
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <>
        <span className={classes}>{this.formatCount()}</span>
        <button>Increment</button>
      </>
    );
  }
}

export default Counter;
