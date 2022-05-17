import React, { useState } from 'react';
import Footer from '../Shared/Footer'
import AppointBanner from './AppointBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AvailableAppoinments date={date}></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;