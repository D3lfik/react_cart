import React from "react";      
import App from "./App";
import { FaPlus } from "react-icons/fa6";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:999,
            title: 'Mobile Phone',
            qty: 1,
            img:''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity =() => {
        console.log('this.test', this.state);
    }
    render(){
        const { price , title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>

                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color: '#777'}}>Rs:{price}</div>
                    <div style={{color: '#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/} </div>
                        <img alt='increase' 
                        className="actions-icons"
                        src = ""
                        onClick={this.increaseQuantity}
                         />
                        <img alt='decrease' 
                        className="actions-icons" src=""
                        />
                        <img alt='delete' 
                        className="actions-icons" 
                        src=""
                        />

                </div>

            </div>
        )
    }
}

const styles = {
    image:{
        height : 100,
        width : 110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;