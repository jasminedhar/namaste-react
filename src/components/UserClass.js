import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Constructor");
  }
  async componentDidMount() {
    console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/jasminedhar");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    console.log("Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2: {count2}</h1> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: jasmine.dhariwal94@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
