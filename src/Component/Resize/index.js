import React from 'react';

class Resize extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { size: 100 };
    this.boxRef = React.createRef();
  }

  handleIncrementClick = () => {
    this.setState((state) => ({ size: state.size + 10 }));
  };

  componentDidUpdate(prevState, prevProps) {
    console.log('componentDidUpdate');
    // react to update and change the HTML element's size
    this.boxRef.current.style.width = `${this.state.size}px`;
    this.boxRef.current.style.height = `${this.state.size}px`;
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.handleIncrementClick}>Resize</button>
        <div ref={this.boxRef}></div>
      </div>
    );
  }
}

export default Resize;
