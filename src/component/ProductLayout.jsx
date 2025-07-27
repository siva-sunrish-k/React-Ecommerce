
import ProductCard from "./ProductCard";
import { product_data } from "../api/dummyData.jsx";
import { product_data_3 } from "../api/dummyData.jsx";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { ShimmerCircularImage, ShimmerSimpleGallery } from "react-shimmer-effects";
import ProductCard2 from "./productCard2";
import useProductData from "../hooks/useProductData.jsx";


// const ProductLayout = () => {
//     return (
//         <div className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
//             <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">




//                 {/* {product_data.map((item,index) => {
//                     return (
//                         <>
//                             <ProductCard 
//                                 key={uuidv4()}
//                                 productImage={item.productImage}
//                                 name={item.name}
//                                 is_veg={item.is_veg}
//                                 org_price={item.org_price}
//                                 des_price={item.des_price}
//                                 shortDescription={item.shortDescription}
//                                 longDescription={item.longDescription}
//                             />
//                         </>
//                     )
//                 }
//                 )}; */}
//             </div>
//         </div>
//     );
// };

const productWithCategory = (Component) => {
    const EnhancedComponent = (props) => {
        return (
            <>
                <div className="relative">
                    <p className="absolute top-0 left-0 inline-flex items-center rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 z-10">
                        {props.category}</p>
                    <Component {...props} />
                </div>
            </>
        )
    }
    return EnhancedComponent;
}


const ProductLayout = () => {

    const { loading, productData } = useProductData();
    
    const ProductWithCategory = productWithCategory(ProductCard2);

    if (loading) {
        return <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />;;
    } else {
        return (
            <>
                <div className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
                    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {productData.map((item) => {
                            return (
                                <ProductWithCategory
                                    key={uuidv4()}
                                    product_id={item.id}
                                    product_image={item.thumbnail}
                                    product_title={item.title}
                                    product_offer={item.discountPercentage}
                                    product_rating={item.rating}
                                    product_rating_count={item.stock}
                                    product_price={item.price}
                                    category={item.category}
                                />
                            )
                        })}
                    </div>
                </div>
            </>

        )
    }
};


export default ProductLayout;