import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products'
const item = {
  product_id: 1,
  quantity: 2
}
class App extends Component {


  constructor(props){
    super(props)
    this.state = { products: [], items: []}
  }

  async createItem(item) {
  let postResponse = fetch('http://localhost:8000/items', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  let data = response.json()
  console.log("THis is data: ", data)
  console.log("THis is postResponse", postResponse)
  this.setState({items: data})
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

    createItem(item)

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
