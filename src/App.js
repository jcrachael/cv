import Title from "./components/Title";
import { Main } from "./components/Main";
import Footer from "./components/Footer";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
