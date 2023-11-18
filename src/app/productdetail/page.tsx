// pages/products/[id].js

import { useRouter } from 'next/router';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product details based on the id and render the page

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
      {/* Render other product details */}
    </div>
  );
};

export default ProductDetailPage;
