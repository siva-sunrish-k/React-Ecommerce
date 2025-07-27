import { useEffect, useState } from "react";


const useProductData = () => {

    const [productData, setProductData] = useState([]);  //store the data from API
    const [loading, setLoading] = useState(true);    //showing the shimmering effect

    useEffect(() => {
        // Any logic
        console.log('useEffect Executed');

        fetchData();
    }, []);



    const fetchData = async () => {
        try {
            setLoading(true);
            // Fetching data from an API or any source
            const products = await fetch('https://dummyjson.com/products');
            const data = await products.json();
            // console.log(data.products);
            setProductData(data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setLoading(false);
        }
    };

    console.log(productData);

    return {loading,productData};
};

export default useProductData;