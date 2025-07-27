import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from 'uuid';
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductLayout from "./component/ProductLayout";
import ProductDetails from "./component/ProductDetails";
import Comment from "./component/comment";
import Counter from "./component/counter";
import ErrorPage from "./component/Error";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, } from "react-router-dom";
import ImageComponent from "./component/ImageComponent";
import { lazy, Suspense } from "react";
import Calculation from "./component/Calculation";
import Contact from "./component/Contact";
import Contact2 from "./component/Contact2";
import ComponentA from "./component/PropDrilling/ComponentA";
import ComponentB from "./component/PropDrilling/ComponentB";
import ComponentC from "./component/PropDrilling/ComponentC";
import ComponentD from "./component/PropDrilling/ComponentD";
import UserContext from "./store/userContext";
import Cart from "./component/Cart";
import CartProvider from "./store/CartContext";
import Home from "./component/Home";

const CounterLazy = lazy(() => import("./component/counter")); //dynamic routing


const AppLayout = () => {
    return (
        <>
            <UserContext.Provider value={{ name: "sunrish", age: 23, id: uuidv4() }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </>
    );
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <ProductLayout />,
            },
            {
                path: "/products/:product_id",
                element: <ProductDetails />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/contact2",
                element: <Contact2 />,
            },
            {
                path: "/counter",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        {/* <Counter /> */}
                        <CounterLazy />
                    </Suspense>
                ),
            },
            {
                path: "/comment",
                element: <Comment />,
            },
            {
                path: "/image",
                element: <ImageComponent />,
            },
            {
                path: "/calculation",
                element: <Calculation />,
            },
            {
                path: "/prop-drilling",
                element: <ComponentA />,
            },
        ],
        errorElement: <ErrorPage />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartProvider>
        <RouterProvider router={routes} />
    </CartProvider>
);
// root.render(<Home />);

