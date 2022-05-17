import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import Service from './Service'

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-center text-xl text-secondary'>  Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}
                        setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;