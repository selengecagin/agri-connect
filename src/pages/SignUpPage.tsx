import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../api";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const onSubmit = (data: FormValues) => {
  let formattedData = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  setLoading(true);
  delete data.confirmPassword;
  api
    .post("/signup", formattedData)
    .then((res) => {
      console.log("Post request response: ", res);
      localStorage.setItem("token", res.data.token);
      setLoading(false);
      setTimeout(() => navigate(-1), 5000);
    })
    .catch((err) => {
      console.error("Post request failed:", err);
      setLoading(false);
    })
    .finally(() => {
      setLoading(false);
    });
  console.log("Form data: ", formattedData);
};

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center gap-8 py-12 bg-[#fafafa] h-[700px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-6">
          <label htmlFor="name" className="w-[450px]">
            <p className="pb-2 text-lg font-normal text-darkTextColor">Name</p>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm "
              {...register("name", {
                required: "Please enter your name.",
                minLength: {
                  value: 3,
                  message: "Your name should be at least 3 characters long.",
                },
              })}
            ></input>
            {typeof errors.name?.message === "string" && (
              <p className="text-red-500">{errors.name?.message}</p>
            )}
          </label>

          <label htmlFor="email" className="w-[450px]">
            <p className="pb-2 text-lg font-normal text-darkTextColor">Email</p>
            <input
              type="text"
              placeholder="example@domain.com"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("email", {
                required: "Please enter your email address.",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message:
                    "Looks like this isn’t a valid email format. Please check and try again.",
                },
              })}
            ></input>
            {typeof errors.email?.message === "string" && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </label>

          <label htmlFor="password" className="passwordArea w-[450px]">
            <p className="pb-2 text-lg font-normal text-darkTextColor">
              Password
            </p>
            <input
              type="password"
              placeholder="Create a Password"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("password", {
                required: "Please create a password.",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Your password should be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters (e.g., @, #, $).",
                },
              })}
            ></input>
            {typeof errors.password?.message === "string" && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </label>

          <label
            htmlFor="confirmPassword"
            className="confirmPasswordArea w-[450px]"
          >
            <p className="pb-2 text-lg font-normal text-darkTextColor">
              Confirm Password
            </p>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === watch("password") ||
                  "Passwords do not match. Try again.",
              })}
            ></input>
            {typeof errors.confirmPassword?.message === "string" && (
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            )}
          </label>

          <div className="registerButtonArea">
            <button
              className={`rounded-md items-center px-16 py-4 text-base font-bold text-white bg-blue-700 ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:animate-wiggle-more hover:animate-twice"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "REGISTER"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
