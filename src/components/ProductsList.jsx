import api from "../services/config";
import { useQuery } from "@tanstack/react-query";
import ProductsListItem from "./ProductsListItem";

function ProductsList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("/products?page=1&limit=10").then((res) => res.data),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products!</p>;

  return (
    <table className="w-[1140px] h-[737px] border-[rgba(228,228,228,1)] mt-5 border rounded-t-4xl border-separate overflow-hidden">
      <thead className="h-[70px] bg-[rgba(242,242,242,1)]">
        <tr>
          <th>نام کالا</th>
          <th>موجودی</th>
          <th>قیمت</th>
          <th>شناسه کالا</th>
        </tr>
      </thead>
      <tbody>
        {data?.data.map((product) => (
          <ProductsListItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductsList;
