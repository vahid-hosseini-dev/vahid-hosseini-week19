import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas/registerSchema";

function AddModalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  const formClass =
    "flex flex-col gap-5 bg-white py-[2rem] p-3 rounded-4xl shadow-lg w-[460px] min-h-[448px] relative";
  const inputClass =
    "w-[400px] min-h-[2px] p-[10px] m-auto rounded-md bg-[rgba(242,242,242,1)] text-[rgba(40,40,40,0.5)] text-sm text-right outline-none";

  return (
    <div className="w-full h-full bg-black/5 backdrop-blur-xs fixed top-0 left-0 z-50 flex justify-center items-center">
      <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center">ایجاد محصول جدید</p>
        <div className="flex flex-col gap-1 text-right">
          <label className="mr-5" htmlFor="productName">
            نام کالا
          </label>
          <input
            id="productName"
            className={inputClass}
            {...register("productName", { required: "نام کالا الزامی است" })}
            placeholder="نام کالا"
          />
          <p className="text-sm min-h-[35px] text-red-400 self-start">
            {errors.productName?.message}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-right">
          <label className="mr-5" htmlFor="quantity">
            تعداد موجودی
          </label>
          <input
            id="quantity"
            className={inputClass}
            {...register("quantity", { required: "نام کالا الزامی است" })}
            placeholder="نام کالا"
          />
          <p className="text-sm min-h-[35px] text-red-400 self-start">
            {errors.quantity?.message}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-right">
          <label className="mr-5" htmlFor="price">
            قیمت
          </label>
          <input
            id="price"
            className={inputClass}
            {...register("price", { required: "نام کالا الزامی است" })}
            placeholder="نام کالا"
          />
          <p className="text-sm min-h-[35px] text-red-400 self-start">
            {errors.price?.message}
          </p>
        </div>

        <div className="flex justify-around mt-5">
          <input
            type="submit"
            className="cursor-pointer w-[185px] h-[42px] rounded-md p-[10px] bg-[rgba(85,163,240,1)] text-white text-sm"
            value={"ایجاد"}
          />

          <input
            type="button"
            className="cursor-pointer w-[185px] h-[42px] rounded-md p-[10px] bg-[rgba(223,223,223,1))] text-[rgba(40,40,40,0.8)] text-sm"
            value={"انصراف"}
          />
        </div>
      </form>
    </div>
  );
}

export default AddModalForm;
