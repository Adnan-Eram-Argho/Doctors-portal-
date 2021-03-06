import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots, _id } = treatment;
    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot, _id, name)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary text-center">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" value={format(date, 'PP')} disabled class="input input-bordered w-full max-w-xs" />

                        <select name='slot' class="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>

                        <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs" />

                        <input type="email" name='email' placeholder="Email Adress" class="input input-bordered w-full max-w-xs" />

                        <input type="text" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;