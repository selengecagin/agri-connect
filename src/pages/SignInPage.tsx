import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="">
      <form className="flex flex-col justify-center items-center gap-8 py-12">
        <label htmlFor="email" className="w-[450px]">
          <p className="pb-2 text-lg font-normal text-darkTextColor">Email</p>
          <input
            type="text"
            placeholder="example@domain.com"
            className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
            {...register("email", {
              required: "Please enter email address.",
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
            placeholder="Enter Password"
            className="w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm"
            {...register("password", {
              required: "Please enter password.",
            })}
          ></input>
          {typeof errors.password?.message === "string" && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
        </label>

        

      </form>
    </div>
  );
}
