import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [],
  };

  handleIncrement = (product) => {
    // prompt("Increment Clicked");

    //Updating the state
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button className="btn btn-sm btn-danger m-2" onClick={()=>this.props.onDelete(this.props.onDelete)}>Delete</button>
      </div>
    );
  }
  //Refractor method?

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning " : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <h6 className=" ">Zero</h6> : count;
  }
}

export default Counter;

// renderTags() {
//   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
//   return (
//     <ul>
//       {this.state.tags.map((tag) => (
//         <li key={tag}>{tag}</li>
//       ))}
//     </ul>
//   );
// }
