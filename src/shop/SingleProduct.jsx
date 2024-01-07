import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const SingleProduct = () => {
    const [product,setProduct]=useState([])
    const {id}=useParams();
    // console.log(id)
    useEffect(()=>{
fetch("/src/products.json").then(res=>res.json()).then(data=>console.log(data))
    },[])

    const result=product.filter((p)=>p.id)
    console.log(result)
    return (
        <div>
           <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Single Product"}/>
           <div className='shop-single padding-tb aside-bg'>
<div className='container'>
<div className='row justify-content-center'>
<div>
    Left Side
</div>
</div>
</div>
           </div>
        </div>
    );
};

export default SingleProduct;