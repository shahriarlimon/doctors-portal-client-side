import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseConfigInit";
import { toast } from "react-toastify";
const BookingModal = ({ selectedTreatment, date, setSelectedTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = selectedTreatment;
  const formattedDate = format(date, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setSelectedTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-center text-secondary">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 justify-items-center space-y-3 mt-3"
          >
            <input
              type="text"
              name="time"
              readOnly
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={user?.displayName || ""}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              readOnly
              value={user?.email}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
