import { Link } from "react-router-dom";

const ProductCard2 = ({
    product_id,
    product_image,
    product_title,
    product_offer,
    product_rating,
    product_rating_count,
    product_price }) => {
    return (
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
            {/* Image Container */}
            <div className="relative h-78 sm:h-56 w-full overflow-hidden mt-3">
                <Link to={`/products/${product_id}`}>
                    <img
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-95"
                        src={product_image}
                        alt={product_title}
                    />
                </Link>
            </div>

            {/* Content Container */}
            <div className="p-4 sm:p-6">
                <div className="mb-3 flex items-center justify-between">
                    {/* Offer Badge */}
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                            Up to {product_offer}% OFF
                        </span>
                    </div>
                    <div className="flex items-center justify-end gap-1">
                        <button
                            type="button"
                            data-tooltip-target="tooltip-quick-look"
                            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only"> Quick look </span>
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                />
                                <path
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </button>
                        <div
                            id="tooltip-quick-look"
                            role="tooltip"
                            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                            data-popper-placement="top"
                        >
                            Quick look
                            <div className="tooltip-arrow" data-popper-arrow="" />
                        </div>
                        <button
                            type="button"
                            data-tooltip-target="tooltip-add-to-favorites"
                            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only"> Add to Favorites </span>
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                />
                            </svg>
                        </button>
                        <div
                            id="tooltip-add-to-favorites"
                            role="tooltip"
                            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                            data-popper-placement="top"
                        >
                            Add to favorites
                            <div className="tooltip-arrow" data-popper-arrow="" />
                        </div>
                    </div>
                </div>


                {/* Product Title */}
                <Link to={`/products/${product_id}`} className="block">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 line-clamp-2 mb-2 transition-colors">
                        {product_title}
                    </h3>
                </Link>


                {/* Rating */}
                <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                        {product_rating}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        ({product_rating_count})
                    </span>
                </div>

                {/* Features */}
                <ul className="mt-2 mb-4 flex flex-wrap justify-between gap-4 text-xs sm:text-sm">
                    <li className="flex items-center gap-2 bg-gray-100 py-1 px-2 rounded-lg dark:bg-gray-700">
                        <svg
                            className=" h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                            />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Fast Delivery
                        </p>
                    </li>
                    <li className="flex items-center gap-2 bg-gray-100 py-1 px-2 rounded-lg">
                        <svg
                            className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                            />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Best Price
                        </p>
                    </li>
                </ul>



                {/* Price and Button */}
                <div className="flex items-center justify-evenly sm:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                        <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                            ₹{product_price}
                        </p>
                    </div>
                    <Link to={`/products/${product_id}`} className="flex-shrink-0">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-lg bg-primary-600 px-3 py-2 text-xs sm:text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-500 transition-colors"
                        >
                            <svg
                                className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard2;