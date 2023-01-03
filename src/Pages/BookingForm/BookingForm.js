import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css'


const BookingForm = () => {
    const navigate = useNavigate();
    const handleBookingFormSubmit = event => {
        event.preventDefault()
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const fullName = firstName + ' ' + lastName;
        const address = event.target.address.value;
        const phoneNumber = event.target.phone.value;
        const email = event.target.email.value;
        const brideFirstName = event.target.brideFirstName.value;
        const brideLastName = event.target.brideLastName.value;
        const brideFullName = brideFirstName + ' ' + brideLastName;
        const bridePhone = event.target.bridePhone.value;
        const brideEmail = event.target.brideEmail.value;
        const groomFirstName = event.target.groomFirstName.value;
        const groomLastName = event.target.groomLastName.value;
        const groomFullName = groomFirstName + groomLastName;
        const groomPhone = event.target.groomPhone.value;
        const groomEmail = event.target.groomEmail.value;
        const date = event.target.date.value;
        const time = event.target.time.value;
        const guestNumber = event.target.guestNumber.value;

        console.log(fullName, address, phoneNumber, email, brideFullName, bridePhone, brideEmail, groomFullName, groomPhone, groomEmail, date, time, guestNumber);
        navigate('/');

    }
    return (
        <div className='container booking-form-container'>
            <div className='w-75 mx-auto'>
                <h1 className=' my-5'>WEDDING BOOKING FORM</h1>
                <p className='mb-5 lh-lg'>Your Wedding is an event you want to remember, and The Willows understands that. Our passionate and dedicated event planners will work tirelessly to help you create your dream wedding day.

                    Whether you're looking to host a pre-party, a reception party, or even the entire Wedding, including your religious/civil event, we can cater to your needs. Book your visit with us and see the beautiful spaces we have available!

                    Complete the form below, and a team member will contact you as soon as possible to help you begin planning your dream day.

                </p>
                <hr />
                <h3 className='mt-5 mb-3 text-start ps-4'>PLEASE COMPLETE THE FORM BELOW</h3>
                <form onSubmit={handleBookingFormSubmit} className='p-4 text-muted '>
                    <div className='form-field '>
                        <p className='fs-5 text-start ps-1'>Contract Name</p>
                        <div className='d-flex'>
                            <div className='w-50 me-3'>
                                <input className='w-100 d-block' type="text" name="firstName" />
                                <label className='d-block w-100 text-start text-muted ps-2 mt-2' htmlFor="firstName"><small>First Name</small></label>
                            </div>
                            <div className='w-50'>
                                <input className='w-100 d-block ' type="text" name="lastName" />
                                <label className='d-block w-100 text-start text-muted ps-2 mt-2' htmlFor="lastName"><small>Last Name</small></label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-3'>
                        <p className='fs-5 text-start ps-1'>Contract Address</p>
                        <textarea className='w-100' name="address" cols="100" rows="4"></textarea>
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-2'>Contract Telephone Number</p>
                        <input type="tel" name="phone" />
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-1'>Contract Email</p>
                        <input type="email" name="email" />
                    </div>
                    <div className='form-field mt-4 pt-2'>
                        <p className='fs-5 text-start ps-1'>Bride's Name</p>
                        <div className='d-flex'>
                            <div className='w-50 me-3'>
                                <input className='w-100 d-block' type="text" name="brideFirstName" />
                                <label className='d-block w-100 text-start text-muted ps-1 mt-2' htmlFor="brideFirstName"><small>First Name</small></label>
                            </div>
                            <div className='w-50'>
                                <input className='w-100 d-block ' type="text" name="brideLastName" />
                                <label className='d-block w-100 text-start text-muted ps-1 mt-2' htmlFor="brideLastName"><small>Last Name</small></label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-2'>Bride's Telephone Number</p>
                        <input type="tel" name="bridePhone" />
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-1'>Bride's Email</p>
                        <input type="email" name="brideEmail" required />
                    </div>
                    <div className='form-field mt-4 pt-2'>
                        <p className='fs-5 text-start ps-1'>Groom's Name</p>
                        <div className='d-flex'>
                            <div className='w-50 me-3'>
                                <input className='w-100 d-block' type="text" name="groomFirstName" />
                                <label className='d-block w-100 text-start text-muted ps-1 mt-2' htmlFor="groomFirstName"><small>First Name</small></label>
                            </div>
                            <div className='w-50'>
                                <input className='w-100 d-block ' type="text" name="groomLastName" />
                                <label className='d-block w-100 text-start text-muted ps-1 mt-2' htmlFor="groomLastName"><small>Last Name</small></label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-2'>Groom's Telephone Number</p>
                        <input type="tel" name="groomPhone" />
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-1'>Groom's Email</p>
                        <input type="email" name="groomEmail" />
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-1'>Event Date</p>
                        <input type="date" name="date" />
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-1'>Time of Event</p>
                        <input type="time" name="time" />
                    </div>
                    <div className='d-flex flex-column mt-4 pt-2'>
                        <p className='fs-5 text-start ps-1'>Number of Guest</p>
                        <input type="number" name="guestNumber" />
                    </div>
                    <input id='booking-submit-btn' className='w-100 my-5 ' type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default BookingForm;