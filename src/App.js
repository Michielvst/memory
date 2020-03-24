import React from "react";
import "./App.css";
import Card from "./components/Card";

const wait = (amount = 0) =>
  new Promise(resolve => setTimeout(resolve, amount));

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

let typesCards = [
  "square",
  "circle",
  "heart",
  "triangleUp",
  "triangleDown",
  "trapezoid",
  "parallelogram",
  "diamond",
  "starFive",
  "hexagon",
  "square2",
  "circle2",
  "heart2",
  "triangleUp2",
  "triangleDown2",
  "trapezoid2",
  "parallelogram2",
  "diamond2",
  "starFive2",
  "hexagon2"
];
shuffle(typesCards);
class App extends React.Component {
  state = {
    selected: [],
    toRemove: [
      "square",
      "circle",
      "heart",
      "triangleUp",
      "triangleDown",
      "trapezoid",
      "parallelogram",
      "diamond",
      "starFive",
      "hexagon",
      "square2",
      "circle2",
      "heart2",
      "triangleUp2",
      "triangleDown2",
      "trapezoid2",
      "parallelogram2",
      "diamond2",
      "starFive2",
      "hexagon2"
    ]
  };

  appRef = React.createRef();

  setSelected = async type => {
    let selected = this.state.selected;
    selected.push(type);
    this.setState({
      selected
    });
    if (selected.length === 2) {
      this.appRef.current.classList.toggle("notClickable");
      await wait(500);
      if (
        selected[0].includes(selected[1]) ||
        selected[1].includes(selected[0])
      ) {
        const toRemove = this.state.toRemove;
        const removed = toRemove
          .filter(e => e !== selected[0])
          .filter(e => e !== selected[1]);
        this.setState({
          toRemove: removed
        });
      }
      selected = [];
      this.appRef.current.classList.toggle("notClickable");
    }
    this.setState({
      selected
    });
  };

  gewonnen = () => {
    if (this.state.toRemove.length === 0) {
      return <p>kak</p>;
    }
  };

  render() {
    return (
      <div className="App" ref={this.appRef}>
        {typesCards.map(type => (
          <Card
            name={type}
            setSelected={this.setSelected}
            selected={this.state.selected}
            toRemove={this.state.toRemove}
          />
        ))}
        {this.gewonnen()}
      </div>
    );
  }
}
export default App;
