import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { products: [], items: []}
  }

  componentDidMount() {
    var requestProducts = fetch('http://localhost:8000/products').then(function(response){
      return response.json()
    })
    var requestItems = fetch('http://localhost:8000/items').then(function(response){
      return response.json()
    })

    Promise.all([requestProducts, requestItems]).then((values)=>{
      const products = values[0]
      const items = values[1]
      this.setState({items: items, products: products})
      console.log(this.state)
    })

  }



  render() {
    return (
      <div>
          <Products products={this.state.products} items={this.state.items}/>

      </div>

    );
  }
}

export default App;
