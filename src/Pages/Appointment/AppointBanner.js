import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
import { format } from 'date-fns';

const AppointBanner = ({ date, setDate }) => {


    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="lg:max-w-lg rounded-lg shadow-2xl" alt='Dentist chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>you have selected: {format(date, 'PP')}</p>
                </div>
            </div>

        </div>
    );
};

export default AppointBanner;