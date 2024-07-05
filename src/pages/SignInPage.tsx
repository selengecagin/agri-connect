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
    <div className="bg-lightGray1">
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

        {/* TODO implement remember me feature */}
        {/* <label htmlFor="rememberMe">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          Remember Me
        </label> */}

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

        <button
          className={`rounded-md items-center px-16 py-4 text-base font-bold text-white  bg-blue-700  ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:animate-wiggle-more hover:animate-twice"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
