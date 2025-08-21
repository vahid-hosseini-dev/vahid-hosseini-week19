import AddModalForm from "./AddModalForm";
import DeleteModal from "./DeleteModal";

function Modal({ modalType, setModalType }) {
  if (!modalType) return null;

  switch (modalType.type) {
    case "addProduct":
      return <AddModalForm setModalType={setModalType} modalType={modalType} />;
    case "delete":
      return <DeleteModal setModalType={setModalType} modaltype={modalType} />;
    default:
      return null;
  }
}
export default Modal;
