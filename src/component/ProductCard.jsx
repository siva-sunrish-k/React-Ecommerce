import { useCart } from "../store/CartContext";

const ProductCard = ({ productImage, name, is_veg, shortDescription, org_price, des_price, longDescription, id, stock, category, brand, sku, availabilityStatus, shippingInformation, warrantyInformation, returnPolicy, description, images, rating, reviews }) => {
    const { addToCart, isInCart, getProductQuantity } = useCart();
    
    const product = {
        id,
        title: name,
        price: des_price,
        originalPrice: org_price,
        description: shortDescription,
        longDescription,
        images: images || [productImage],
        stock,
        category,
        brand,
        sku,
        availabilityStatus,
        shippingInformation,
        warrantyInformation,
        returnPolicy,
        rating,
        reviews
    };

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    const isProductInCart = isInCart(id);
    const cartQuantity = getProductQuantity(id);

    return (
        <div className="max-w-xs rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src={productImage}
                alt={name}
            />

            {/* product details */}
            <div className="p-4">
                <div className="flex items-center mb-2">
                    {is_veg ? (
                        <span className="inline-block w-4 h-4 bg-green-600 rounded-full mr-2 border border-green-800"></span>
                    ) : (
                        <span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-2 border border-red-800"></span>
                    )}

                    {/* Name */}
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
                </div>

                {/* Cart Status */}
                {isProductInCart && (
                    <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded text-xs text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                        ✓ In cart ({cartQuantity})
                    </div>
                )}

                {/* price details */}
                <div className="flex items-center gap-2 mb-2">

                    {/* orginal price */}
                    <span className="text-sm line-through text-gray-400">₹{org_price}</span>

                    {/* discounted price */}
                    <span className="text-xl font-bold text-gray-900 dark:text-white">₹{des_price}</span>

                    <span className="ml-2 px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs font-semibold">
                        {Math.round(((org_price - des_price) / org_price) * 100)}% OFF
                    </span>
                </div>

                {/* stock status */}
                <div className="mb-2">
                    <span className={`text-xs px-2 py-1 rounded ${stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {stock > 0 ? `${stock} in stock` : 'Out of stock'}
                    </span>
                </div>

                {/* short description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{shortDescription}</p>

                {/* add btn  */}
                <button 
                    onClick={handleAddToCart}
                    disabled={stock === 0}
                    className={`mt-2 w-full font-medium py-2 px-4 rounded-lg transition-colors ${
                        stock === 0 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : isProductInCart
                                ? 'bg-green-600 hover:bg-green-700 text-white'
                                : 'bg-primary-700 hover:bg-primary-800 text-white'
                    }`}
                >
                    {stock === 0 ? 'Out of Stock' : isProductInCart ? 'Update Cart' : 'Add to Cart'}
                </button>

                {/* long description */}
                {/* <details className="mt-2">
                    <summary className="cursor-pointer text-primary-700 dark:text-primary-400 text-sm">More details</summary>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{longDescription}</p>
                </details> */}
            </div>
        </div>

    );
};

export default ProductCard;