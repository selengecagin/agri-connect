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
      <form>
        <div>
          <label htmlFor="name">
            <p>Name</p>
            <input
              type="text"
              placeholder="Your Full Name"
              {...register("name", {
                required: "Please enter your name.",
                minLength: {
                  value: 3,
                  message: "Your name should be at least 3 characters long.",
                },
              })}
            ></input>
            {typeof errors.name?.message === "string" && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>
        </div>
      </form>
    </div>
  );
}
