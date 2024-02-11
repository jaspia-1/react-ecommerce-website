import React, { useState } from 'react';
import Ratting from '../components/Ratting';
const reviwtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/public/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/public/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/public/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/public/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];
const Review = () => {
    const[reviewShow,setReviewShow]=useState(true)
    return (
       <>
       <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className='desc' onClick={()=>setReviewShow(!reviewShow)}>Description</li>
        <li className='rev' onClick={()=>setReviewShow(!reviewShow)}>Reviews 4</li>
       </ul>

       {/*desc & review content */}
       <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
<div className='review-showing'>
<ul className='content lab-ul'>
{
    ReviewList?.map((review,i)=>(
        <li key={i}> 
<div className='post-thumb'>
    <img src={review.imgUrl} alt=''/>
</div>
<div className='post-content'>
    <div className='entry-meta'>
<div className='posted-on'>
<a href='#'>{review.name}</a>
<p>{review.date}</p>
</div>
    </div>
    <div className='entry-content'>
<p>{review.desc}</p>
    </div>
</div>
        </li>
    ))
}
</ul>
{/*add review field */}
<div className='client-review'>
<div className='review-form'>
<div className='review-title'>
<h5>{reviwtitle}</h5>
</div>
<form action='action' className='row'>
<div className='col-md-4 col-12'>
<input type='text' name='name' id='name' placeholder='Full Name'/>
</div>
<div className='col-md-4 col-12'>
<input type='email' name='email' id='name' placeholder='Your Email'/>
</div>
<div className='col-md-4 col-12'>
    <div className='rating'>
<span className='me-2'>Your Rating</span>
<Ratting>

</Ratting>
    </div>

</div>
<div className='col-md-12 col-12'>
<textarea name='message' id='message' rows="8" placeholder='Type Here Message'></textarea>
</div>
<div className='col-12'>
    <button type='submit' className='default-button'>
        <span>Submit Review</span>
    </button>
</div>
</form>
</div>
</div>
</div>
{/* description */}
<div className='description'>
<p>
Our shop offers an exclusive array of high-quality products meticulously curated to cater to diverse tastes and needs. From trendy fashion pieces to cutting-edge gadgets, our selection ensures something for everyone. We pride ourselves on providing top-notch customer service, guaranteeing a seamless shopping experience. Our products embody both style and functionality, handpicked to reflect the latest trends and enduring classics. Whether you're seeking unique gifts, timeless essentials, or innovative tech, our shop boasts an extensive collection that meets the demands of modern lifestyles. Explore our catalog to discover an assortment of items designed to elevate your everyday life and inspire your passions, delivered with convenience and reliability.
</p>
<div className='post-item'>
<div className='post-thumb'>
<img src='/public/assets/images/shop/01.jpg'/>
</div>
<div className='post-content'>
<ul className='lab-ul'>
<li>Engaging posts captivate audiences, sparking interaction.</li>
<li>Quality content resonates, forging lasting connections.</li>
<li>Visuals amplify messages, enhancing content impact.</li>
<li>Consistency breeds familiarity, strengthening brand presence.</li>
<li>Compelling storytelling inspires, fostering community engagement.</li>
<li>Effective communication builds trust, fostering strong relationships.</li>
<li>Continuous learning cultivates expertise, fostering professional growth.</li>
</ul>
</div>
</div>
<p>Our latest featured item is a versatile must-have designed to elevate your everyday routine. Crafted with precision and innovation, this product embodies functionality and style. Whether you're aiming for a fashion statement or practicality, this item seamlessly blends both worlds. Its sleek design and durability make it suitable for various occasions, promising reliability and endurance. Engineered with the latest technology, it ensures top-notch performance, catering to modern demands. Embrace convenience and sophistication as this item effortlessly complements your lifestyle, offering a perfect balance of utility and elegance. Discover the perfect addition to your collection and redefine your experience with this exceptional piece, delivering unparalleled value and satisfaction.






</p>
</div>
       </div>
       </>
    );
};

export default Review;