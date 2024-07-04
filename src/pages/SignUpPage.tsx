import React from "react";
import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-8 py-12">
        <div className="flex flex-col gap-6">
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
        </div>
      </form>
    </div>
  );
}
