import React from 'react';
import appointment from "../../../assets/images/appointment.png";  
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
import doctor from '../../../assets/images/doctor.png';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 space-y-3 '>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default Appointment;