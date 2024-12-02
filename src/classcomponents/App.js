import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.titre = "Application mon premier classe composant";
  }
  render() {
    return (
      <div>
        <h1>{this.props.titre}</h1>
        <hr />
      </div>
    );
  }
}

export default App;
