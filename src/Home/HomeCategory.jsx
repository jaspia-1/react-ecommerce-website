// import React from 'react';
// import { Link } from 'react-router-dom';
// const subTitle = "Choose Any Products";
// const title = "Buy Everything with Us";
// const btnText = "Get Started Now";

// const categoryList = [
//     {
//         imgUrl: 'https://i.ibb.co/ftJRCgp/01.jpg',
//         imgAlt: 'category rajibraj91 rajibraj',
//         iconName: 'icofont-brand-windows',
//         title: 'DSLR Camera',
//     },
//     {
//         imgUrl: '/public/assets/images/category/02.jpg',
//         imgAlt: 'category rajibraj91 rajibraj',
//         iconName: 'icofont-brand-windows',
//         title: 'Shoes',
//     },
//     {
//         imgUrl: '/public/assets/images/category/03.jpg',
//         imgAlt: 'category rajibraj91 rajibraj',
//         iconName: 'icofont-brand-windows',
//         title: 'Photography',
//     },
//     {
//         imgUrl: '/public/assets/images/category/04.jpg',
//         imgAlt: 'category rajibraj91 rajibraj',
//         iconName: 'icofont-brand-windows',
//         title: 'Formal Dress',
//     },
//     {
//         imgUrl: '/public/assets/images/category/05.jpg',
//         imgAlt: 'category rajibraj91 rajibraj',
//         iconName: 'icofont-brand-windows',
//         title: 'Colorful Bags',
//     },
//     {
//         imgUrl: '/public/assets/images/category/06.jpg',
//         imgAlt: 'category rajibraj91 rajibraj',
//         iconName: 'icofont-brand-windows',
//         title: 'Home Decor',
//     },
// ]
// const HomeCategory = () => {
//     return (
//         <div className='category-section style-4 padding-tb'>
//             <div className='container'>
//                 <div className='section-header text-center'>
//                     <span className='subtitle'>{subTitle}</span>
//                     <h2 className='title'>{title}</h2>

//                 </div>
//                 <div className='section-wrapper'>
//                     <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
//                         {
//                             categoryList?.map((val, i) => (<div key={i} className='col'>
//                                 <Link to="/shop" className='category-item'>
//                                     <div className='category-inner'>
//                                         <div className='category-thumb'>
//                                             <img src={val.imgUrl} alt='' />
//                                         </div>
//                                         <div className='category-content'>
//                                             <div className='cate-icon'>
//                                                 <i className={val.iconName}></i>
//                                             </div>
//                                             <Link to='/shop'><h6>{val.title}</h6></Link>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                             ))
//                         }
//                     </div>
//                     <div className='text-center mt-5'>
//                         <Link to='/shop' className='lab-btn'><span>{btnText}</span></Link>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default HomeCategory;
import React from 'react';
import { Link } from 'react-router-dom';
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: 'https://i.ibb.co/ftJRCgp/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'https://i.ibb.co/WcDRpwv/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'https://i.ibb.co/dQ86TyS/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'https://i.ibb.co/k3Xg3HX/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'https://i.ibb.co/6tjybd4/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'https://i.ibb.co/xqJz0xb/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]

const HomeCategory = () => {
    return (
        <div className='category-section style-4 padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{title}</h2>
                </div>
                <div className='section-wrapper'>
                    <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                        {
                            categoryList.map((val, i) => (
                                <div key={i} className='col'>
                                    <Link to="/shop" className='category-item'>
                                        <div className='category-inner'>
                                            <div className='category-thumb'>
                                                <img src={val.imgUrl} 
                                                alt={val.imgAlt}
                                                 className='category-image'
                                                 style={{ width: '315px', height: 'auto' }} 
                                                 />
                                            </div>
                                            <div className='category-content'>
                                                <div className='cate-icon'>
                                                    <i className={val.iconName}></i>
                                                </div>
                                                <Link to='/shop'><h6>{val.title}</h6></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className='text-center mt-5'>
                        <Link to='/shop' className='lab-btn'><span>{btnText}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;
