import ProfileBanner from "../../components/ProfileBanner";
import ProductsList from "../../components/ProductsList";
import Modal from "../../components/Modals/Modal";
import { useState } from "react";

const Dashboard = () => {
  const [modalType, setModalType] = useState(null);
  

  return (
    <div className="flex flex-col justify-center items-center">
      <ProfileBanner />
      <div className="mt-10 flex justify-between items-center w-[1140px] ">
        <div className="flex">
          <img
            className="size-[30px] ml-2"
            src="./src/assets/img/setting.png"
            alt="setting"
          />
          <span className="text-2xl">مدیریت کالا</span>
        </div>
        <button
          onClick={() => {
            setModalType("addProduct");
          }}
          className="w-[132px] h-[45px] cursor-pointer text-white bg-[rgba(85,163,240,.8)] hover:bg-[rgba(85,163,240,1)] rounded-xl"
        >
          افزودن محصول
        </button>
      </div>
      <ProductsList />
        <Modal modalType={modalType} setModalType={setModalType} />
    </div>
  );
};

export { Dashboard };
