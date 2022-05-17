import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const {
    isLoading,
    error,
    data: doctors,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/doctors`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Total doctors:{doctors.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorsRow
                refetch={refetch}
                index={index}
                doctor={doctor}
                key={doctor._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
