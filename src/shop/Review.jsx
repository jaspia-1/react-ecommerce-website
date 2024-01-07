import React, { useState } from 'react';
const reviwtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];
const Review = () => {
    const[reviewShow,setReviewShow]=useState(true)
    return (
       <>
       <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className='desc' onClick={()=>setReviewShow(!reviewShow)}>Description</li>
        <li className='rev' onClick={()=>setReviewShow(!reviewShow)}>Reviews 4</li>
       </ul>

       {/*desc & review content */}
       <div className={`review-content ${reviewShow ? "reviw-content-show" : "description-show"}`}>
<div className='review-showing'>
<ul className='content lab-ul'>
{
    ReviewList.map((review,i)=>(
        <li key={i}> 
<div className='post-thumb'>
    <img src={review.imgUrl} alt=''/>
</div>
<div>
    <div className='entry-meta'>
<div className='posted-on'>
<a href='#'>{review.name}</a>
<p></p>
</div>
    </div>
    <div className='entry-content'>

    </div>
</div>
        </li>
    )
}
</ul>
</div>
{/* description */}
       </div>
       </>
    );
};

export default Review;