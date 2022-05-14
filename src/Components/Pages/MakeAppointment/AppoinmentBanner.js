import React from 'react';
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";



const AppoinmentBanner = ({date,setDate}) => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker 
             mode="single"
             selected={date}
             onSelect={setDate}
            />
          </div>
        </div>
      </div>
    );
};

export default AppoinmentBanner;