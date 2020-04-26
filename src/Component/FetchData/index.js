import React, { Component } from 'react';

class FetchData extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      title: '',
      error: null,
      Loading: true,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholderssss.typicode.com/todos/2')
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data);
        this.setState({ title: data.title, Loading: false });
      })
      .catch((error) => {
        this.setState({ error, Loading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.error !== this.state.error) {
      console.log(' there is an error');
      fetch('https://jsonplaceholder.typicode.com/todos/3')
        .then((res) => res.json())
        .then((data) => {
          this.setState({ title: data.title, Loading: false, error: null });
        });
    }
  }

  render() {
    console.log('render');
    const { error, Loading, title } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (Loading) {
      return <div>Loading...</div>;
    } else {
      return <h1>{title} </h1>;
    }
  }
}

export default FetchData;
