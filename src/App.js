import logo from './logo.svg';
import React from 'react';
import Cart from './cart';
import Navbar from './Navbar';
import { firestore } from './firebase';
class App extends React.Component {
      constructor(){
        super();
        this.state = {
        products: [],
        loading : true
        }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
    //    this.testing();
    this.db = firestore;
    }

    componentDidMount(){
      // firestore
      // .collection('products')
      // .get()
      // .then((snapshot)=>{
      //   console.log(snapshot);
      //   snapshot.docs.map((doc) =>{
      //     console.log(doc.data());
      //   });
      //   const products = snapshot.docs.map((doc)=>{
      //     const data = doc.data();
      //     data['id'] = doc.id;
      //     return data;
      //   })
      //   this.setState({
      //     products ,
      //     loading:false
      //   })
      // })
      this.db
      .collection('products')
      // .where('price','==',90000)
      .orderBy('price','desc')
      .onSnapshot((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc) =>{
          console.log(doc.data());
        });
        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products ,
          loading:false
        })
      })
    }


    handleIncreaseQuantity = (product) =>{
        console.log('inc qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        // products[index].qty += 1;
        // this.setState({
        //     products
        // })
        const docRef = this.db.collection('products').doc(products[index].id);
        docRef
        .update({
          qty: products[index].qty + 1 
        })
        .then(() => {
          console.log('Updated Succesfully')
        })
        .catch((error)=>{
          console.log('Error:',error);
        })



    }
    handleDecreaseQuantity = (product) =>{
        console.log('inc qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 0){
            return; 
        }

        // products[index].qty -= 1;
        // this.setState({
        //     products
        // })
        const docRef = this.db.collection('products').doc(products[index].id);
        docRef
        .update({
          qty: products[index].qty - 1
        })
        .then(() => {
          console.log('Updated Succesfully')
        })
        .catch((error)=>{
          console.log('Error:',error);
        })

    }
    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        // const items = products.filter((item)=>item.id !== id);
        // this.setState({
        //     products:items
        // });
        const docRef = this.db.collection('products').doc(id);
        docRef
        .delete()
        .then(() => {
          console.log('Deleted Succesfully')
        })
        .catch((error)=>{
          console.log('Error:',error);
        })
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
        if (product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price 
        }
        return '';
      });
      return cartTotal;
    }

  addProduct=() => {
    this.db
    .collection('products')
    .add({
      img:'https://images.unsplash.com/photo-1628557119555-fb3d687cc310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
      price:5000,
      qty: 3,
      title:'SSD HDD'
    })
    .then((docRef)=> {
      console.log('Product has been Added',docRef);

    })
    .catch((error)=>{
      console.log('Error',error);
    })


  }
  
  render(){
    const {products , loading} = this.state;
  return (
    <div className="App">
    <h1>Cart</h1>
    <Navbar count= {this.getCartCount()}/>
    <button onClick={this.addProduct} style={{padding:20 , fontSize:20}}>Add a product</button>
    <Cart 
    products ={products}
    onIncreaseQuantity = {this.handleIncreaseQuantity}
    onDecreaseQuantity = {this.handleDecreaseQuantity}
    onDeleteProduct    = {this.handleDeleteProduct}

    />
    {loading && <h1>Loading products ...</h1>}
    <div style={{fontSize:20,padding:10}}> TOTAL:{this.getCartTotal()}</div>

    </div>
  );
  }
}

export default App;
