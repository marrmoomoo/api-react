import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { products: []}
  }

  componentDidMount() {
    const url = 'http://localhost:8000/products'
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }



  render() {
    return (
      <div>
          <Products products={this.state.products} />
      </div>

    );
  }
}

export default App;
