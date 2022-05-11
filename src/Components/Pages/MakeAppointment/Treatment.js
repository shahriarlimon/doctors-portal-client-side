import React from "react";

const Treatment = ({ treatment, setSelectedTreatment }) => {
  const { name, slots } = treatment;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h2 class="card-title text-secondary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another day</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <div  class="card-actions">
            <label
             onClick={()=>setSelectedTreatment(treatment)}
              for="booking-modal"
              disabled={slots.length === 0}
              class="btn modal-button  btn-primary uppercase text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
