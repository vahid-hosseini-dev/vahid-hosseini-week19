import AddModalForm from "./AddModalForm";

function Modal({ modalType }) {
  return modalType === "addProduct" ? <AddModalForm /> : "";
}
export default Modal;
