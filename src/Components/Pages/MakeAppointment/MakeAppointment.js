import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import AppoinmentBanner from "./AppoinmentBanner";
import Treatments from "./Treatments";

const MakeAppointment = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div>
     <AppoinmentBanner date={date} setDate={setDate}/>
     <Treatments date={date}/>
    </div>
  );
};

export default MakeAppointment;
