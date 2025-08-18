import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/registerSchema";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data) => console.log(data);
  const inputClass =
    "w-[400px] min-h-[53px] py-2 px-12 out rounded-2xl bg-[rgba(242,242,242,1)] text-[rgba(40,40,40,0.5)] text-base text-right";
  const formClass =
    "flex flex-col items-center bg-white gap-1 p-10 w-[460px] min-h-[596px] border-[#E4E4E4] border-1 border-solid rounded-4xl ";

  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-start items-center">
        <img
          className="w-[80px]"
          src="./src/assets/img/BotoStart.png"
          alt="botostart"
        />
        <span className="mt-5 mb-10 text-2xl text-[rgba(40,40,40,1)]">
          فرم ورود
        </span>
      </div>

      <input
        className={inputClass}
        {...register("username")}
        placeholder="نام کاربری"
      />

      <p className="text-sm min-h-[35px] text-red-400 self-start">
        {errors.username?.message}
      </p>

      <div style={{ position: "relative" }}>
        <input
          className={inputClass}
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="رمز عبور"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3"
        >
          {showPassword ? (
            <img className="w-[25px]" src="./src/assets/svg/eye.svg"></img>
          ) : (
            <img className="w-[25px]" src="./src/assets/svg/eye-off.svg"></img>
          )}
        </button>
      </div>
      <p className="text-sm min-h-[35px] text-red-400 self-start">
        {errors.password?.message}
      </p>

      <input
        className={`${inputClass} !bg-[rgba(85,163,240,1)] !text-center text-white mb-[10px]`}
        type="submit"
        value="ثبت نام"
      />
      <Link
        className="text-sm self-start text-[rgba(58,139,237,1)]"
        to="../register"
      >
        ایجاد حساب کاربری!
      </Link>
    </form>
  );
}

export default RegistrationForm;
