import { Product } from "../../data/products";
import "./ProductCard.css";

interface Props {
  product: Product;
  onViewDetail: (productId: number) => void;
}

const ProductCard = ({ product, onViewDetail }: Props) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-content">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">
          {product.price.toLocaleString("en-US")} đ
        </p>
      </div>
      <button className="product-button" onChange={() => {}}>
        Xem chi tiết
      </button>
    </div>
  );
};

export default ProductCard;
