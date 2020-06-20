// NOTE: Class component | With state
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  countUpByOne = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.countUpByOne}>Click</button>
        <span>Clicked {this.state.count} times.</span>
      </div>
    );
  }
}

export default Counter;

// NOTE: Function Component | With state
// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount((x) => x + 1)}>Click</button>
//       <span>Clicked {count} times.</span>
//     </div>
//   );
// };

// export default Counter;
