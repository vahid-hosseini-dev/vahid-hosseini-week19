function ProductsListItem({ product, setModalType, modalType }) {
  return (
    <tr className="flex text-right pr-15 border-b-1 border-b-blue-300">
      <td className="pl-40 w-1/6 h-15 pt-5">{product.name}</td>
      <td className="pl-40 w-1/6 h-15 pt-5">{product.quantity}</td>
      <td className="pl-40 w-1/6 h-15 pt-5">{product.price}</td>
      <td className="pl-4 w-2/6 h-15 pt-5">{product.id}</td>
      <td className="w-1-6 h-15 pr-20 pt-5">
        <button className="ml-5">
          <img
            className="cursor-pointer hover:scale-120 transition duration-150 ease-in-out"
            src="./src/assets/img/edit.png"
            alt="edit"
          />
        </button>
        <button>
          <img
            className="cursor-pointer hover:scale-120 transition duration-150 ease-in-out"
            onClick={() =>
              setModalType({ ...modalType, type: "delete", id: product.id })
            }
            src="./src/assets/img/trash.png"
            alt="trash"
          />
        </button>
      </td>
    </tr>
  );
}

export default ProductsListItem;
