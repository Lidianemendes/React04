import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  calc = (x) => {
    return x * 2;
  };
  render() {
    return (
      <div>
        <h1 className="num">A minha prima tem {this.calc(8)} anos.</h1>
      </div>
    );
  }
}
export default App;
