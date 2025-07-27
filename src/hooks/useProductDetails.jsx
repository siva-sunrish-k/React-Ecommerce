import { useEffect, useState } from "react";



const useProductDetails = (product_id) => {

    const [loading, setLoading] = useState(true);    //showing the shimmering effect
    const [productData, setProductData] = useState([]);  //store the data from API

    useEffect(() => {
        // Any logic
        console.log('useEffect Executed');
        fetchData();
    }, [product_id]);

    const fetchData = async () => {
        try {
            setLoading(true);
            // Fetching data from an API or any source
            const products = await fetch(`https://dummyjson.com/products/${product_id}`);
            const product = await products.json();
            setProductData(product);
            console.log(product);

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }



    return { loading, productData };

};

export default useProductDetails;