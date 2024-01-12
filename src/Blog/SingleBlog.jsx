/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];
const SingleBlog = () => {
    const [blog,setBlog]=useState(blogList)
    const {id}=useParams()
    // console.log(id)
    const result = blog.filter((b)=>b.id===Number(id));
    console.log(result[0])
    return (
        <div>
            <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"}></PageHeader>
            <div className='blog-section blog-single padding-tb section-bg'>
<div className='conatiner'>
<div className='row justify-contect-center justify-content-center '>
<div className='col-lg-8 col-12 '>
    <article>
        <div className='section-wrapper'>
<div className="row row-cols-1 justify-content-center g-4">
    
    <div className='col'>
<div className='post-item style-2'>
<div className="post-inner">
    {
        result.map((item)=>(
            <div key={item.id}>
                <div className='post-thumb'>
                    <img 
                    src={item.imgUrl} 
                    alt=''
                     className='w-100'
                     />
                    </div>
                    <div className='post-content'>
                        <h3>{item.title}</h3>
                        <div className='meta-post'>
                        
                        <ul className='lab-ul'> 
{
    item.metaList.map((val,i)=>(
        <li key={i}><i className={val.iconName}></i>{val.text}</li>
    ))
}

</ul>

                            </div>
                            <p>Discover the latest trends and must-have items in our shop newest blog post! From fashion-forward looks to cutting-edge technology, our blog covers it all. Dive into a world of style inspiration, exploring versatile wardrobe essentials and innovative gadgets designed to elevate your lifestyle. Uncover expert tips on accessorizing, staying ahead of the curve with seasonal collections, and making the most out of the hottest releases. Delve into our in-depth product reviews, showcasing the quality, functionality, and uniqueness of our curated selection. Stay updated with our blog exclusive insights, industry news, and how-to guides. Let our blog be your go-to destination for discovering all things chic, sophisticated, and on-trend</p>
                            <blockquote>
                                <p>Dynamically recaptiualize distributed technologies is whereas turnkey channels and ontonectally provide access to resource levelling experties vias worldwide deliverablies extend aserser are diverse voetals</p>
                                <cite>
                                    <a href="#">...Melissa Hunter</a>
                                </cite>
                            </blockquote>
                            <p>Welcome to our shop latest blog post, your ultimate guide to staying stylish and up-to-date with the latest trends! Explore a curated collection of fashion-forward pieces, timeless classics, and innovative tech essentials. Dive into our in-depth product reviews and insightful articles that highlight the functionality, durability, and uniqueness of our offerings. Discover expert tips on mixing and matching outfits, upgrading your tech game, and accessorizing with finesse. Stay connected with our blog for exclusive sneak peeks, seasonal highlights, and practical advice to elevate your shopping experience. Join us as we navigate the world of fashion, lifestyle, and innovation together!</p>

                            <img src='/src/assets/images/blog/single/01.jpg'/>
                            <p>Embark on a style journey with our latest blog post, tailored exclusively for trendsetters and tech enthusiasts alike. Delve into a treasure trove of fashion-forward selections, ranging from chic apparel to cutting-edge gadgets that redefine modern living. Our blog unveils detailed insights and expert reviews, offering a comprehensive view of our curated products quality, functionality, and versatility. Uncover invaluable fashion tips, tech hacks, and accessory pairings that complement your lifestyle effortlessly. Engage with our vibrant community, stay informed about seasonal releases, and discover innovative ways to redefine your personal style. Join us as we unveil the perfect blend of sophistication, utility, and trendsetting allure in our shop blog!</p>
                            <div className='video-thumb'>
                            <img src='/src/assets/images/blog/single/02.jpg' alt=''/>
                            <a href="https://youtu.be/VsUzmlZfYNg?si=26mtmTfSXsKXkmnW"
                            className='video-button popup'
                            target='_blank'
                            >
                                <i className='icofont-ui-play'></i>
                            </a>
                            </div>
                            <p>Welcome to our shop latest blog post, your ultimate guide to staying stylish and up-to-date with the latest trends! Explore a curated collection of fashion-forward pieces, timeless classics, and innovative tech essentials. Dive into our in-depth product reviews and insightful articles that highlight the functionality, durability, and uniqueness of our offerings. Discover expert tips on mixing and matching outfits, upgrading your tech game, and accessorizing with finesse. Stay connected with our blog for exclusive sneak peeks, seasonal highlights, and practical advice to elevate your shopping experience. Join us as we navigate the world of fashion, lifestyle, and innovation together!</p>
                            <div className='tags-section'>
                                <ul className='tags lab-ul'>
<li>
    <a href="#">Agency</a>
</li>
<li>
    <a href="#">Business</a>
</li>
<li>
    <a href="#">Personal</a>
</li>
                                </ul>
                                <ul className='lab-ul social-icons'>
{
 socialList.map((val,i)=>(
    <li key={i}>
<a href ="#" className={val.className}
>
    <i className='val.iconName'></i>
</a>
    </li>
 ))   
}
                                </ul>
                                </div>
                        </div>
                       
                      
                          
                </div>
        ))
    }
</div>
</div>
<div className='navigations-part'>
<div className='left'>
<a href ="" className='prev'>
    <i className='icofont-double-left'></i> Previous Blog
</a>
<a href ="" className='title'>
   Evisculate Parallel Processes via Technica Sound Models Authoritative 
</a>
</div>
<div className='right'>
<a href ="" className='prev'>
    <i className='icofont-double-right'></i> Previous Blog
</a>
<a href ="" className='title'>
   Evisculate Parallel Processes via Technica Sound Models Authoritative 
</a>
</div>
</div>
    </div>

</div>
        </div>
    </article>
</div>


</div>
</div>
            </div>
        </div>
    );
};

export default SingleBlog;