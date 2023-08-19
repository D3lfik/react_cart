import logo from './logo.svg';
import React from 'react';
import Cart from './cart';
import Navbar from './Navbar';
class App extends React.Component {
      constructor(){
        super();
        this.state = {
        products: [
            {
                price:99,
                title: 'Watch',
                qty: 1,
                img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80',
                id:1
            },
            {
                price:999,
                title: 'Mobile Phone',
                qty: 1,
                img:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
                id:2
            },
            {
                price:9999,
                title: 'Laptop',
                qty: 1,
                img:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80',
                id:3
            }
        ]
        }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
    //    this.testing();
    }
    handleIncreaseQuantity = (product) =>{
        console.log('inc qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products
        })

    }
    handleDecreaseQuantity = (product) =>{
        console.log('inc qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 0){
            return; 
        }

        products[index].qty -= 1;
        this.setState({
            products
        })

    }
    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        const items = products.filter((item)=>item.id !== id);
        this.setState({
            products:items
        });
    }
    getCartCount = () => {
      const {products} = this.state;
      let count = 0 ;
      products.forEach((product) =>{
        count += product.qty
      })  
      return count;
    }
    getCartTotal = () =>{
      const {products} = this.state;
      let cartTotal = 0;
      products.map((product)=> {
        cartTotal = cartTotal + product.qty * product.price 
      });
      return cartTotal;
    }
  render(){
    const {products} = this.state;
  return (
    <div className="App">
    <h1>Cart</h1>
    <Navbar count= {this.getCartCount()}/>
    <Cart 
    products ={products}
    onIncreaseQuantity = {this.handleIncreaseQuantity}
    onDecreaseQuantity = {this.handleDecreaseQuantity}
    onDeleteProduct    = {this.handleDeleteProduct}

    />
    <div style={{fontSize:20,padding:10}}> TOTAL:{this.getCartTotal()}</div>

    </div>
  );
  }
}

export default App;
