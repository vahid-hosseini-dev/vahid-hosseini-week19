import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "./Toast";
import api from "../services/config";

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("auth/login", data);
      localStorage.setItem("token", res.data.token);
      showToast(
        "ورود با موفقیت انجام شد و در حال انتقال به پنل کاربری !",
        "success"
      );
      setTimeout(() => {
        navigate("/dashboard");
      }, 2100);
    } catch (err) {
      if (err.response?.data?.message === "Invalid credentials") {
        showToast("نام کاربری یا رمز عبور اشتباه است", "error");
      }
    }
  };

  const inputClass =
    "w-[400px] min-h-[53px] py-2 px-12 out rounded-2xl bg-[rgba(242,242,242,1)] text-[rgba(40,40,40,0.5)] text-base text-right outline-none";
  const formClass =
    "flex flex-col items-center bg-white gap-1 p-10 w-[460px] min-h-[523px] border-[#E4E4E4] border-1 border-solid rounded-4xl ";

  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-start items-center">
        <img
          className="w-[80px]"
          src="./src/assets/img/BotoStart.png"
          alt="botostart"
        />
        <span className="mt-5 mb-10 text-2xl text-[rgba(40,40,40,1)]">
          فرم ثبت نام
        </span>
      </div>

      <input
        className={inputClass}
        {...register("username", { required: "نام کاربری الزامی است" })}
        placeholder="نام کاربری"
      />

      <p className="text-sm min-h-[35px] text-red-400 self-start">
        {errors.username?.message}
      </p>

      <div style={{ position: "relative" }}>
        <input
          className={inputClass}
          type={showPassword ? "text" : "password"}
          {...register("password", { required: "رمز عبور الزامی است" })}
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
        className={`${inputClass} cursor-pointer !bg-[rgba(85,163,240,1)] !text-center text-white mb-[10px]`}
        type="submit"
        value="ورود"
      />

      {toast ? (
        <Toast message={toast.message} type={toast.type} />
      ) : (
        <Link
          className="text-sm self-start text-[rgba(58,139,237,1)] "
          to="../register"
        >
          ایجاد حساب کاربری!
        </Link>
      )}
    </form>
  );
}

export default RegistrationForm;
