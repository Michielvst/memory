import React from "react";

class Card extends React.Component {
  handleClick = e => {
    const type = e.currentTarget.id;
    this.props.setSelected(type);
  };

  checkClasses = type => {
    if (this.props.toRemove.includes(type)) {
      if (this.props.selected.includes(type)) {
        return `Card selected`;
      } else {
        return `Card notSelected`;
      }
    } else {
      return `Card removed`;
    }
  };

  render() {
    return (
      <div
        className={this.checkClasses(this.props.name)}
        onClick={this.handleClick}
        id={this.props.name}
      >
        <div className={`figure ${this.props.name}`}></div>
      </div>
    );
  }
}

export default Card;
