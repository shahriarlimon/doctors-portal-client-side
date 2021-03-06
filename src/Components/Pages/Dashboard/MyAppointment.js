import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebaseConfigInit";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`,{
        method:'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
        }
      })
        .then((res) =>{ 
          if(res.status === 401 || res.status===403){
            navigate('/');
          }
          return res.json();
        })
        .then((data) =>{
            setAppointments(data)
        } );
    }
  }, [user,navigate]);

  return (
    <div>
      <h1>Total appointments:{appointments?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr>
                <td>{a?.patientName}</td>
                <td>{a?.date}</td>
                <td>{a.slot}</td>
                <td>{a?.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
