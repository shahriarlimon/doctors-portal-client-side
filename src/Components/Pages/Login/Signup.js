import React from 'react';
import { useForm } from "react-hook-form";
import auth from "../../../firebaseConfigInit";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from "../../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from 'firebase/auth';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading,googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInError;
  const navigate = useNavigate()
  const onSubmit = async(data) => {
    console.log(data);
   await createUserWithEmailAndPassword(data.email, data.password);
   await updateProfile({ displayName:data.name });
  };
  if(loading || googleLoading){
      return <Loading/>
  }
  if(user || googleUser){
      navigate('/appoinment');
  }
  if(error||googleError){
      signInError= <p className="text-red-500 text-center"><small>{error?.message|| googleError?.message}</small></p>
  }
    return (
        <div className="flex h-screen items-center justify-center">
        <div class="card  w-96 bg-base-100 shadow-2xl ">
          <div class="card-body ">
            <h2 class="text-center text-3xl">Sign Up</h2>
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
                    }
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
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer!",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span class="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input className="btn btn-accent w-full max-w-xs" type="submit" value="Sign Up" />
              <p className="text-sm mt-2 text-center">Already have an account?<Link className="text-primary" to="/login">Please login</Link></p>
            </form>
            <div class="divider">OR</div>
            <button onClick={()=>signInWithGoogle()} class="btn btn-outline">Continue with Google </button>
          </div>
        </div>
      </div>
    );
};

export default Signup;