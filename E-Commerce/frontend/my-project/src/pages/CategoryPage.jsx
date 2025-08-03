import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard";
import all_product from "../../public/all_product.js";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    // No need to show toast here if CartContext already does it
  };

  const filteredProducts = all_product.filter(p => {
    const cat = p.category.toLowerCase();
    const param = category.toLowerCase();
    return (cat === param) || (cat === 'kid' && param === 'kids') || (cat === 'kids' && param === 'kid');
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4 capitalize">{category} Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              view="grid"
              addToCart={() => handleAddToCart(product)}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};
export default CategoryPage;