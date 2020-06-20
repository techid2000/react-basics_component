// NOTE: Class component
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <div>Welcome</div>;
  }
}

export default Welcome;

// NOTE: Function component
// import React from "react";

// const Welcome = () => {
//   return <div>Welcome</div>;
// };

// export default Welcome;

// NOTE: Props | Class component
// import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return <div>Welcome {this.props.name}</div>;
//   }
// }

// export default Welcome;

// NOTE: Props | Function component
// import React from "react";

// const Welcome = (props) => {
//   return <div>Welcome {props.name}!</div>;
// };

// export default Welcome;