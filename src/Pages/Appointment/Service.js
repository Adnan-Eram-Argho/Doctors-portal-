import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    //#2A303C
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span >{slots[0]}</span> : <span className='text-red-500'> Try another day</span>
                    }
                </p>
                <p>{slots.length} spaces available</p>
                <div class="card-actions justify-center">

                    <label disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} for="booking-modal" class="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;