import { useEffect, useState } from "react";

const ProductLise = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products");
    setProducts(["Cloting", "Household"]);
  });
  return <div>ProductLise</div>;
};

export default ProductLise;
