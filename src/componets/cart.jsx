import React, { Component } from "react";
class Cart extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    return (
      <div>
        <h1>Cart management</h1>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge text-bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Cart;
