import AddModalForm from "./AddModalForm";

function Modal({ modalType, setModalType }) {
  if (!modalType) return null;

  return modalType === "addProduct" ? <AddModalForm  setModalType={setModalType} /> : "";
  // return modalType === "deleteModal" ? <AddModalForm /> : "";
  // return modalType === "editModal" ? <AddModalForm /> : "";
}
export default Modal;
