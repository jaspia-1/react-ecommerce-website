import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
const CartPage = () => {
    const [cartItems,setcartItems]=useState([]);
    useEffect(()=>{
        //fetch cart item from local storage
        const storedCartItems=JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);
    },[])
    //calculate prices
    const calculateTotalPrice=(item)=>{
        return item.price*item.quantity;
    }
    //handle quantity increase
    const handleIncrease=(item)=>{
        item.quantity+=1;
        setcartItems([...cartItems]);

        //update local storage with new cart items
        localStorage.setItem("cart",JSON.stringify(cartItems));
    }

    // handle quantity decrease
    const handleDecrease=(item)=>{
        if(item.quantity>1){
            item.quantity-=1;
            setcartItems([...cartItems]);
            //update local storage with new cart items
            localStorage.setItem("cart",JSON.stringify(cartItems));
        }
    }
    //handle item remove
    const handleRemoveItem=(item)=>{
        const updateCart=cartItems.filter((cartItem)=>cartItem.id !==item.id);
        //update new cart
        setcartItems(updateCart)
        updateLocalStorage(updateCart)
    }
    const updateLocalStorage=(cart)=>{
localStorage.setItem("cart",JSON.stringify(cart));
    }
    //cart subtotal
    const cartSubTotal=cartItems.reduce((total,item)=>{
        return total+calculateTotalPrice(item);
    },0)
    //order total
    const orderTotal=cartSubTotal;

    return (
        <div>
         <PageHeader title={"Shop Cart"} curPage={"Cart Page"}/>
         <div className='shop-cart padding-tb'>
<div className="container">
    <div className="section-wrapper">
        {/*cart top */}
        <div className='cart-top'>
<table>
    <thead>
<tr>
    <th className='cat-product'>Product</th>
    <th className='cat-price'>Price</th>
    <th className='cat-quantity'>Quantity</th>
    <th className='cat-toprice'>Total</th>
    <th className='cat-edit'>Edit</th>
</tr>
    </thead>
    {/* table body*/}
    <tbody>
        {
            cartItems.map((item,indx)=>(
                <tr key={indx}>
<td className='product-item cat-product'>
<div className='p-thumb'>
<Link to="/shop"><img src={item.img} alt=''/></Link>
</div>
<div className='p-content'>
<Link to="/shop">{item.name}</Link>
</div>
</td>
<td className='cat-price'>$ {item.price}</td>
<td className='cat-quantity'>
    <div className='cart-plus-minus'>
 <div className='dec qtybutton' onClick={()=>handleDecrease(item)}>-</div>
 <input type='text' className='cart-plus-minus-box'
 name='qtybutton' value={item.quantity}/>
 <div className='inc qtybutton' onClick={()=> handleIncrease(item)}>+</div>
    </div>
</td>
<td className='cat-toprice'>{calculateTotalPrice(item)}</td>
<td className='cat-edit'>
    <a href="#" onClick={()=>handleRemoveItem(item)}>
<img src={delImgUrl} alt=''/>
    </a>
</td>
                </tr>
            ))
        }
    </tbody>
</table>
        </div>
        {/*---- cart top ends ---- */}
        {/*cart bottom */}
        <div className='cart-bottom'>
{/* checkout box*/}
<div className='cart-checkout-box'>
<form className='coupon'>
<input className='cart-page-input-text' type='text' name='coupon' id='coupon'
placeholder='Coupon code ....'/>
<input type='submit' value="Apply Coupon"/>
</form>
<form className='cart-checkout'>
<input type='submit' value="Update Cart"/>
<div>CheckoutPage</div>
</form>
</div>
{/*-------checkot box end ----------- */}
{/*shopping box */}
<div className='shiping-box'>
<div className='row'>
<div className='col-md-6 col-12'>
<div className='calculate-shiping'>
<h3>Calculate Shiping</h3>
<div className='outline-select'>
<select>
    <option value="uk">United Kingdom (UK)</option>
    <option value="us">United States</option>
    <option value="pak">Pakisthan</option>
    <option value="ind">India</option>
    <option value="nep">Nepal</option>
</select>
<span className='select-icon'>
<i className='icofont-rounded-down'></i>
</span>
</div>
<div className='outline-select shiping-select'>
<select>
    <option value="uk">United Kingdom (UK)</option>
    <option value="us">United States</option>
    <option value="pak">Pakisthan</option>
    <option value="ind">India</option>
    <option value="nep">Nepal</option>
</select>
<span className='select-icon'>
<i className='icofont-rounded-down'></i>
</span>
</div>
</div>
</div>
<div className='col-md-6 col-12'>Right Side</div>
</div>
</div>
        </div>
    </div>
</div>
         </div>
        </div>
    );
};

export default CartPage;