import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { useAxios } from "../hooks/useAxios";
import { AxiosError } from "axios";
import { useState } from "react";

const SignUpPage = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const [postRequest, postLoading]: [
    (payload?: any, toastify?: boolean) => Promise<void>,
    boolean,
    AxiosError<any> | undefined
  ] = useAxios({
    reqType: "post",
    endpoint: "users",
    navPath: "/",
  });

  type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const submitData: any = {
      name: data.name.trim(),
      email: data.email,
      password: data.password,
    };
    postRequest(submitData, true);
  };

  return (
    <div id="sign-up-form">
      <form
        className="flex flex-col justify-center items-center gap-8 py-12 bg-[#fafafa] h-[700px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-6">
          <label className="inputLabel w-[450px]" htmlFor="name">
            <p className="pb-2 text-lg font-normal">Name</p>
            <input
              type="text"
              placeholder="Your Full Name"
              className={`defaultInput ${
                errors.name ? "inputWithError" : ""
              } w-[450px] h-[50px] pl-3 shrink-0 shadow-sm`}
              {...register("name", {
                required: "Please enter your name.",
                minLength: {
                  value: 3,
                  message: "Your name should be at least 3 characters long.",
                },
              })}
            />
          </label>
          {errors.name && (
            <p
              role="alert"
              className="formErrorMessage text-sm text-start text-red-500"
            >
              {errors.name.message}
            </p>
          )}

          <label className="inputLabel w-[450px]" htmlFor="email">
            <p className="pb-2 text-lg font-normal">Email</p>
            <input
              type="email"
              placeholder="example@domain.com"
              className={`defaultInput ${
                errors.email ? "inputWithError" : ""
              } w-[450px] h-[50px] pl-3 items-center shrink-0 shadow-sm`}
              {...register("email", {
                required: "Please enter your email address.",
                validate: (val: any) => {
                  const emailRegex =
                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                  if (!emailRegex.test(val)) {
                    return "Looks like this isn’t a valid email format. Please check and try again.";
                  }
                },
              })}
            />
          </label>
          {errors.email && (
            <p role="alert" className="formErrorMessage text-red-500">
              {errors.email.message}
            </p>
          )}

          <label className="inputLabel w-[450px]" htmlFor="password">
            <p className="pb-2 text-lg font-normal">
              Password
            </p>
            <input
              type={hidePassword ? "password" : "text"}
              placeholder="Create a Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "At least 8 character required",
                },
                validate: (val: any) => {
                  const numbers = /[0-9]/g;
                  const upperCaseLetters = /[A-Z]/g;
                  const lowerCaseLetters = /[a-z]/g;
                  if (!numbers.test(val)) {
                    return "At least one number required";
                  }
                  if (!upperCaseLetters.test(val)) {
                    return "At least one capital letter needed";
                  }
                  if (!lowerCaseLetters.test(val)) {
                    return "At least one lowercase letter needed";
                  }
                },
              })}
              className={`defaultInput ${
                errors.password ? "inputWithError" : ""
              } w-[450px] h-[50px] pl-3 items-start shrink-0 shadow-sm text-red-500`}
            />
            <Icon
              icon={hidePassword ? "octicon:eye-closed-16" : "octicon:eye-16"}
              className="w-6 h-6 absolute top-1/2 right-3 text-neutral-500"
              onClick={() => setHidePassword(!hidePassword)}
            />
          </label>
          {errors.password && (
            <p role="alert" className="formErrorMessage ">
              {errors.password?.message}
            </p>
          )}

          <label className="inputLabel w-[450px]" htmlFor="confirmPassword">
            <p className="pb-2 text-lg font-normal">Confirm Password</p>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Password do not match";
                  }
                },
              })}
              placeholder="Confirm Password"
              className={`defaultInput ${
                errors.confirmPassword ? "inputWithError" : ""
              } w-[450px] h-[50px] pl-3 shrink-0 shadow-sm text-red-500`}
            />
          </label>
          {errors.confirmPassword && (
            <p role="alert" className="formErrorMessage">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            disabled={postLoading ? true : false}
            className={`hover:bg-blue-700 w-full rounded-md bg-blue-700 py-3 px-8 text-center text-base font-semibold text-white outline-none ${
              postLoading ? "opacity-50" : "opacity-100"
            }`}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
