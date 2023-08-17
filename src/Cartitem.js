import React from "react";      

class CartItem extends React.Component{
  
    render(){
        console.log('this.props', this.props)
        const { price ,title, qty} = this.props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = this.props;
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
                        onClick={()=>onIncreaseQuantity(product)}
                         />
                        <img alt='decrease' 
                        className="actions-icons"
                         src=""
                         onClick={()=>onDecreaseQuantity(product)}
                        
                        />
                        <img alt='delete' 
                        className="actions-icons" 
                        src=""
                        onClick={()=>onDeleteProduct(product.id)}

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