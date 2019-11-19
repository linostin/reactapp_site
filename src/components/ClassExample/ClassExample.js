class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Code here</h1>
      </div>
    );
  }
}
_______________________________________________;
function App(props) {
  return (
    <div>
      <h1>{props.whatever}</h1>
    </div>
  );
}
_______________________________________________;
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.whatever}</h1>
      </div>
    );
  }
}
_______________________________________________;
class App extends React.Component {
  yourMethodHere() {}

  render() {
    const style = this.yourMethodHere();
    return (
      <div>
        <h1>Code goes here</h1>
      </div>
    );
  }
}
