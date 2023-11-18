
import products from '../../components/productdetails.json';

export interface Product {
  id: number;
  title: string;
  img_url: string;
  price: number;
  rating: number;
}

const ProductDetailPage = ({params}: { params: { id: string } }) => {

  const product = products.find((p: Product) => p.id === parseInt(params.id as string, 10));

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product Slug: {product?.title}</p>
    </div>
  );
};

export default ProductDetailPage;
