import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../hooks/CartContext";
import "./ProductOnCart.style.css";

const ProductOnCart = ({ product }) => {
  const { removeProduct, updateQuantity } = useContext(CartContext);

  const handleRemove = () => {
    removeProduct(product.name);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(product.name, newQuantity);
    }
  };

  const price = product.price ? Number(product.price) : 0;
  const quantity = product.quantity ? Number(product.quantity) : 0;

  return (
    <div className="product-on-cart">
      <div className="product-details">
        <img
          src={product.image || product.images} // Asegúrate de que la URL de la imagen esté en el campo correcto
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <button className="remove-button" onClick={handleRemove}>
            Eliminar
          </button>
        </div>
      </div>
      <div className="product-pricing">
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <div>
        <input
          type="number"
          value={quantity}
          min="1"
          max="10"
          onChange={handleQuantityChange}
          className="quantity-input"
        />
      </div>
      <div>
        <p className="product-total">${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

ProductOnCart.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string, // Asegúrate de definir este campo correctamente
    images: PropTypes.string, // Alternativa para el nombre del campo de la imagen
    description: PropTypes.string,
  }).isRequired,
};

export default ProductOnCart;
