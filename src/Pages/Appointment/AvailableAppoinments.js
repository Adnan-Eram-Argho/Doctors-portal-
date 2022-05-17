import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Service from './Service'

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-center text-xl text-secondary'>  Available Appointments on {format(date, 'PP')}</h4>
            <div>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinments;