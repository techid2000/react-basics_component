// NOTE: Render your component
import React from "react";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}

export default App;

// NOTE: Props
// import React from "react";
// import Welcome from "./Welcome";

// function App() {
//   return (
//     <div>
//       <Welcome name="Mr. React"/>
//     </div>
//   );
// }

// export default App;

// NOTE: React component lifecycle
// import React, { useState } from "react";
// import Lifecycle from "./Lifecycle";

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setShow((x) => !x)}>
//         {show ? "Hide" : "Show"}
//       </button>
//       <div>{show && <Lifecycle />}</div>
//     </div>
//   );
// }

// export default App;
