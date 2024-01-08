import React, { useEffect, useState } from 'react';

const CartPage = () => {
    const [cartItems,setcartItems]=useState([]);
    useEffect(()=>{
        //fetch cart item from local storage
    },[])
    return (
        <div>
            CartPage
        </div>
    );
};

export default CartPage;