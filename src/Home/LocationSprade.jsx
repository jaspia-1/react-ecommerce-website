import React from 'react';
import { Link } from 'react-router-dom';
const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
imgUrl: '/public/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/public/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/public/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/public/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/public/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/public/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/public/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
]
const LocationSprade=()=>{
    return(
        <div className='clients-section style-2 padding-tb'>
<div className='container'>
<div className='section-header text-center'>
<h2 className='title'>{title}</h2>
<p>{desc}</p>
</div>
<div className='section-wrapper'>
<div className='clients'>
{
    clientsList?.map((val,i)=>(
        <div key={i} className='client-list'>
            <Link to="./" className='client-content'>
                <span>{val.text}</span>
            </Link>
            <div className='client-thumb'>
<img src={val.imgUrl} alt=''></img>
            </div>
        </div>
      
    ))
}
</div>
</div>
</div>
        </div>
    )
};
export default LocationSprade;
