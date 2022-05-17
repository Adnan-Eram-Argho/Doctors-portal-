import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "windson harry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'California',
            img: people1

        },
        {
            _id: 2,
            name: "windson harry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'California',
            img: people2

        },
        {
            _id: 3,
            name: "windson harry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'California',
            img: people3

        },
    ]
    return (
        <section>
            <div className='flex justify-between my-28'>
                <div>
                    <h4 className="text-xl text-primary font-bold ">Testimonials</h4>
                    <h2 className='text-3xl'>What our patients Say </h2>
                </div>
                <div>
                    <img src={quote} className='lg:w-48 w-28' alt="quote" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;