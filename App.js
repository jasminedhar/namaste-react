import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const elem = <span>React Element</span>;

const title = (
  <h1 className="head" tabIndex="1">
    {elem}
    Namaste React using JSX
  </h1>
);

// const Title = () => <h1 className="head">Namaste React using JSX</h1>;

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {/* <Title /> */}
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<HeadingComponent />);
