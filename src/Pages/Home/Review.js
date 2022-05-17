import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-primary text-primary-content">
            <div className="card-body">

                <p>{review.review}</p>
                <div className="flex items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='peoples img' />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl">{review.name}</h2>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;