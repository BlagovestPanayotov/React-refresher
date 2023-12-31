import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    // console.log("Fetching products in", category);
    setProducts(["Cloting", "Household"]);
  }, [category]);

  return (
    <>
      <h2>ProductList</h2>
    </>
  );
};

export default ProductList;
