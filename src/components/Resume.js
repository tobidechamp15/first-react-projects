import { Component } from "react";

class Resume extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1 className="text-center">Resume:{name}</h1>
        <br />
      </div>
    );
  }
}

export default Resume;
