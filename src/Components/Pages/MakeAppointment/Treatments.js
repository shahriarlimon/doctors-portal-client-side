import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import BookingModal from "./BookingModal";
import Treatment from "./Treatment";

const Treatments = ({ date }) => {
  // const [treatments, setTreatments] = useState([]);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const formattedDate = format(date, "PP")
  const { isLoading, error, data:treatments, refetch } = useQuery(['available', formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )
  
   if(isLoading){
     return <Loading/>
   }

 /*  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setTreatments(data));
  }, [formattedDate]); */
  return (
    <div>
      <p className="text-2xl font-bold text-center text-secondary">
        Available Appointments On {format(date, "PP")}
      </p>
      ;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {treatments.map((treatment) => (
          <Treatment
            setSelectedTreatment={setSelectedTreatment}
            treatment={treatment}
            key={treatment._id}
          />
        ))}
      </div>
      {
          selectedTreatment && <BookingModal refetch={refetch} setSelectedTreatment={setSelectedTreatment} date={date} selectedTreatment={selectedTreatment}/>
      }
    </div>
  );
};

export default Treatments;
