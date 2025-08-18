import ProductsListItem from "./ProductsListItem";

function ProductsList() {
  return (
    <table className="w-[1140px] h-[737px] border-[rgba(228,228,228,1)] mt-5 border rounded-t-4xl border-separate overflow-hidden">
      <thead className="h-[70px] bg-[rgba(242,242,242,1)]">
        <tr>
          <th>نام کالا</th>
          <th>موجودی</th>
          <th>قیمت</th>
          <th>شناسه کالا</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ProductsListItem />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductsList;
