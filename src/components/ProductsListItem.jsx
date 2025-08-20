function ProductsListItem({ product }) {
  return (
    <tr >
      <td>{product.name}</td>
      <td>{product.stock}</td>
      <td>{product.price}</td>
      <td>{product.id}</td>
      <td>
        <button>ویرایش</button>
        <button>حذف</button>
      </td>
    </tr>
  );
}

export default ProductsListItem;
