import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";
import { useCart } from "../store/CartContext";

const ProductDetails = () => {

    const {product_id} = useParams();
    const { loading, productData } = useProductDetails(product_id);
    const { addToCart, isInCart, getProductQuantity } = useCart();
    const [quantity, setQuantity] = useState(1);

    // show loading state
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-semibold">loading product Details...</p>
            </div>
        )
    }

    // show error state if no product data
    if (!productData) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-semibold text-red-500">Product not found</p>
            </div>
        )
    }

    const handleAddToCart = () => {
        addToCart(productData, quantity);
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= productData.stock) {
            setQuantity(newQuantity);
        }
    };

    const isProductInCart = isInCart(productData.id);
    const cartQuantity = getProductQuantity(productData.id);

    return (
        <>
            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img
                                className="h-[90%] w-full dark:hidden bg-gray-200 mx-auto rounded-lg shadow-lg dark:bg-gray-800 "
                                src={productData.images && productData.images[0]}
                                alt={productData.title}
                            />
                            <img
                                className="w-full h-[90%] hidden dark:block mx-auto"
                                src={productData.images && productData.images[0]}
                                alt={productData.title}
                            />
                        </div>
                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                {productData.title}
                            </h1>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                    ₹{productData.price}
                                </p>
                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <div className="flex items-center gap-1">
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
                                    </div>
                                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                        {productData.rating}
                                    </p>
                                    <span className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                                        ({productData.stock}) Reviews
                                    </span>
                                </div>
                            </div>

                            {/* Cart Status */}
                            {isProductInCart && (
                                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/20 dark:border-green-800">
                                    <p className="text-sm text-green-700 dark:text-green-400">
                                        ✓ Added to cart ({cartQuantity} {cartQuantity === 1 ? 'item' : 'items'})
                                    </p>
                                </div>
                            )}

                            {/* Quantity Selector */}
                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Quantity
                                </label>
                                <div className="flex items-center space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange(quantity - 1)}
                                        disabled={quantity <= 1}
                                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    >
                                        <svg className="h-4 w-4 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                        min="1"
                                        max={productData.stock}
                                        className="w-16 text-center border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange(quantity + 1)}
                                        disabled={quantity >= productData.stock}
                                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    >
                                        <svg className="h-4 w-4 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {productData.stock} items available
                                </p>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="mt-6">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={productData.stock === 0}
                                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                    </svg>
                                    {productData.stock === 0 ? 'Out of Stock' : isProductInCart ? 'Update Cart' : 'Add to Cart'}
                                </button>
                            </div>

                            {/* Product Details Section */}
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                                <div><span className="font-semibold">Brand:</span> {productData.brand}</div>
                                <div><span className="font-semibold">SKU:</span> {productData.sku}</div>
                                <div><span className="font-semibold">Stock:</span> {productData.stock}</div>
                                <div><span className="font-semibold">Category:</span> {productData.category}</div>
                                <div><span className="font-semibold">Status:</span> {productData.availabilityStatus}</div>
                                <div><span className="font-semibold">Shipping:</span> {productData.shippingInformation}</div>
                                <div><span className="font-semibold">Warranty:</span> {productData.warrantyInformation}</div>
                                <div><span className="font-semibold">Return Policy:</span> {productData.returnPolicy}</div>
                            </div>
                            {/* Short Description */}
                            <div className="mt-4 text-gray-500 dark:text-gray-400">
                                {productData.description}
                            </div>
                        </div>
                    </div>
                    {/* Reviews Section */}
                    <div className="mt-10  bg-gray-100 mx-auto p-6 rounded-lg shadow-lg dark:bg-gray-800">
                        <h2 className="text-lg underline text-gray-900 dark:text-white mb-7 font-extrabold">Customer Reviews</h2>
                        {productData.reviews && productData.reviews.length > 0 ? (
                            <div className="space-y-4">
                                {productData.reviews.map((review, idx) => (
                                    <div key={idx} className="border-b pb-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">{review.reviewerName}</span>
                                            <span className="text-yellow-400">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 text-sm">{review.comment}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-gray-500 dark:text-gray-400">No reviews yet.</div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;