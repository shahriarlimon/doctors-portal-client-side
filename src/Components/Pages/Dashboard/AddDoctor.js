import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const AddDoctor = () => {
  const {
    isLoading,
    error,
    data: treatmentNames,
    refetch,
  } = useQuery("treamentNames", () =>
    fetch(`http://localhost:5000/treatments`).then((res) => res.json())
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "92881fe2e9f29d5bf2079e40e012d5f0";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          /* send to database */
           fetch("http://localhost:5000/doctors", {
            method: "POST",
            body: JSON.stringify(doctor),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
            },
          })
            .then((response) => response.json())
            .then((output) => {
              if (output.insertedId) {
                alert("Added doctor successfully");
                reset();
              } else {
                alert("Failed to add doctor");
                reset();
              }
            }); 
        }
      });
  };

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold">Add a doctor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            class="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Provide a valid email",
              },
            })}
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control  w-full max-w-xs">
          <label class="label">
            <span class="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            class="select input-bordered w-full max-w-xs"
          >
            {treatmentNames?.map((treatmentName) => (
              <option key={treatmentName._id}>{treatmentName.name}</option>
            ))}
          </select>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            type="file"
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label class="label">
            {errors.image?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn btn-accent w-full max-w-xs"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
