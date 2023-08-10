import React from "react";      
import App from "./App";
import { FaPlus } from "react-icons/fa6";

class CartItem extends React.Component{
  
    // // testing() {
    // //     const promise = new Promise ((resolve,reject)=>{
    // //         setTimeout(() =>{
    // //             resolve('done');

    // //         },5000);
    // //     })
    // //     promise.then(()=>{
    // //         this.setState({qty:this.state.qty + 30});
    // //     } )
    // }
    increaseQuantity =() => {
        
        //setState form 1
        // this.setState({
        //     qty:this.state.qty + 1
        // });
        // setState form 2 
        this.setState((prevState)=>{
            return {
                qty:prevState.qty + 1
            }

        } , () =>{
            console.log('this.test', this.state);
        })
    }
    decreaseQuantity = () =>{
        const {qty} = this.state;
        if (qty==0){
            return;
        }
        //if prevState required use this
        this.setState((prevState)=>{
            return{
                qty:prevState.qty - 1

            }
        } , () =>{
            console.log('this.test', this.state);
        })
    }
    render(){
        console.log('this.props', this.props)
        const { price ,title, qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>

                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
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
                        className="actions-icons"
                         src=""
                         onClick={this.decreaseQuantity}
                        
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