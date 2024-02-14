import React, { useState } from 'react';
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';
import { setItem } from 'localforage';
const title = "Our Products";

const ProductData = [
    {
        // imgUrl: 'assets/images/categoryTab/01.jpg',
        imgUrl: 'https://i.ibb.co/3fJhcbh/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'https://i.ibb.co/M1b6vZN/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'https://i.ibb.co/gDS4sKq/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'https://i.ibb.co/4jNLzzk/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'https://i.ibb.co/zVW7NmZ/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'https://i.ibb.co/cCMFPnb/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'https://i.ibb.co/mbf6WX7/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'https://i.ibb.co/tQjLFbB/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
];

const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData)
    const filterItem=(categItem)=>{
const updateItems=ProductData.filter((curElem)=>{
    return curElem.cate===categItem ;
});
setItems(updateItems)
    }
    return (
        <div className='course-section style-3 padding-tb'>
        
            <div className='course-shape one'>
                <img src='https://i.ibb.co/WzPqPMB/01.png' alt='' /></div>
            <div className='course-shape two'>
                <img src='https://i.ibb.co/mT1KX8B/02.png' alt='' /></div>
                <div className='container'>
<div className='section-header'>
<h2 className='title'>{title}</h2>
<div className='course-filter-group'>
    <ul className='lab-ul'>
        <li onClick={()=>setItems(ProductData)}>All</li>
        <li onClick={()=>filterItem("Shoes")}>Shoes</li>
        <li onClick={()=>filterItem("Bags")}>Bags</li>
        <li onClick={()=>filterItem("Phones")}>Phones</li>
        <li onClick={()=>filterItem("Beauty")}>Beauty</li>
    </ul>
</div>
</div>
<div className='section-wrapper'>
<div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
    {
        items?.map((product)=><div key={product.id} className='col'>
<div className='course-item style-4'>
    <div className='course-inner'>
        <div className='course-thubm'>
<img src={product.imgUrl} 
alt=''
style={{ width: '100%', height: '160px' }}
/>
<div className='course-category'>
<div className='course-cate'>
<a href="#">{product.cate}</a>
    </div>
    <div className='course-reiew'>
        <Ratting></Ratting>
        </div>
</div>
        </div>
        <div className='course-content'>
            <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
            <div className='course-footer'>
                <div className='course-author'>
                <Link to='/' className='ca-name'>{product.brand}</Link>
                    </div>
<div className='course-price'>
{
    product.price
}
    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
            )
    }
</div>
</div>
                </div>
        </div>
    );
};

export default CategoryShowCase;