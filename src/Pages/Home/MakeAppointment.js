import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='3xl text-white'>Make appointment</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eius? Debitis, ipsum? Quasi atque, consequuntur delectus ex repellendus, illum hic accusamus illo rem animi voluptas reiciendis debitis dignissimos fugiat obcaecati adipisci enim voluptatum sapiente recusandae quidem deserunt! Dolore, nobis suscipit.</p>
                <Button>get started</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;