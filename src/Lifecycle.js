// NOTE: React component lifecycle
import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
    };
  }
  componentDidMount() {
    console.log("mount");
    this.timer = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.timer);
  }
  render() {
    return <p>Elapsed {this.state.second} seconds</p>;
  }
}

export default Lifecycle;

// NOTE: React component lifecycle (2)
// import React, { useState, useEffect, useRef } from "react";

// const Lifecycle = () => {
//   const [second, setSecond] = useState(0);
//   const timer = useRef(null);

//   useEffect(() => {
//     console.log("mount");
//     timer.current = setInterval(() => setSecond((x) => x + 1), 1000);
//     return () => {
//       console.log("unmount");
//       clearInterval(timer.current);
//     };
//   }, []);

//   useEffect(() => {
//     console.log("update");
//   }, [second]);

//   return <div>Elapsed {second} seconds</div>;
// };

// export default Lifecycle;
