import React from "react";      

const CartItem = (props) => {
       // console.log('this.props', this.props)
        const { price ,title, qty} = props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>

                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs:{price}</div>
                    <div style={{color: '#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/} </div>
                        <img style={{width: 50,height:50}} alt='increase' 
                        className="actions-icons"
                        src = "https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
                        onClick={()=>onIncreaseQuantity(product)}
                         />
                        <img style={{width: 50,height:50}} alt='decrease' 
                        className="actions-icons"
                         src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                         onClick={()=>onDecreaseQuantity(product)}
                        
                        />
                        <img style={{width: 50,height:50}} alt='delete' 
                        className="actions-icons" 
                        src="https://as2.ftcdn.net/v2/jpg/03/73/50/09/1000_F_373500918_7vISJB85YXvvu7SgnpktP752LWRrLzyI.jpg"
                        onClick={()=>onDeleteProduct(product.id)}

                        />

                </div>

            </div>
        )
    
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