import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="lg:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your new smile starts here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button > get started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;