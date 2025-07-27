import { Link } from "react-router-dom";
import useOfflineStatus from "../hooks/useOfflineStatus";
import { useContext, useState } from "react";
import UserContext from "../store/userContext";
import { useCart } from "../store/CartContext";

const Header = () => {
    const status = useOfflineStatus();
    const data = useContext(UserContext);
    const { getTotalItems } = useCart();
    const [searchQuery, setSearchQuery] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        // TODO: Implement search functionality
        console.log("Searching for:", searchQuery);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // TODO: Implement actual dark mode toggle
        document.documentElement.classList.toggle('dark');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-50">
                <nav className=" px-4 lg:px-6 py-0 h-full">
                    <div className="max-w-screen-xl mx-auto h-full">
                        <div className="flex items-center justify-between h-full">
                            {/* Logo */}
                            <Link to="/" className="flex items-center space-x-1 h-full" onClick={closeMobileMenu}>
                                <div className="rounded-lg flex items-center justify-center h-full w-[100px] object-scale-down">
                                    <img className="w-auto h-auto" src="https://ik.imagekit.io/anonymousiva/React_project/Ecom_website/ecom.jpg?updatedAt=1753562014662" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">S-Shop</h1>
                                    <p className="text-sm sm:text-xs text-gray-500 dark:text-gray-400">My Online Store</p>
                                </div>
                            </Link>

                            {/* Search Bar - Hidden on mobile */}
                            <div className="hidden sm:flex flex-1 max-w-md mx-8">
                                <form onSubmit={handleSearch} className="w-full">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                        />
                                        <button
                                            type="submit"
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Right Side Actions */}
                            <div className="flex items-center space-x-2 md:space-x-4">
                                {/* Navigation Links - Desktop Only */}
                                <div className="hidden lg:flex items-center space-x-6">
                                    <Link
                                        to="/"
                                        className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/products"
                                        className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
                                    >
                                        Products
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </div>

                                {/* Dark/Light Mode Toggle */}
                                <button
                                    onClick={toggleDarkMode}
                                    className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                >
                                    {isDarkMode ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </button>

                                {/* Login Button - Hidden on mobile */}
                                <a
                                    href="#"
                                    className="hidden md:inline-block text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                >
                                    Log in
                                </a>

                                {/* Get Started Button - Hidden on mobile */}
                                <a
                                    href="#"
                                    className="hidden md:inline-block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    Get started
                                </a>

                                {/* Cart */}
                                <Link
                                    to="/cart"
                                    className="relative inline-flex items-center p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm7.764 11h10.515l2.334-7H5.855zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0" /></svg>                                    {getTotalItems() > 0 && (
                                        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                            {getTotalItems()}
                                        </span>
                                    )}
                                </Link>

                                {/* Mobile Menu Button */}
                                <button
                                    type="button"
                                    onClick={toggleMobileMenu}
                                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isMobileMenuOpen ? (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile Sidebar Navigation */}
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                            onClick={closeMobileMenu}
                        />

                        {/* Sidebar */}
                        <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
                                    <button
                                        onClick={closeMobileMenu}
                                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Search Bar - Mobile */}
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <form onSubmit={handleSearch} className="w-full">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Search products..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex-1 p-6">
                                    <nav className="space-y-4">
                                        <Link
                                            to="/"
                                            className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 rounded-lg transition-colors"
                                            onClick={closeMobileMenu}
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/products"
                                            className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 rounded-lg transition-colors"
                                            onClick={closeMobileMenu}
                                        >
                                            Products
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 rounded-lg transition-colors"
                                            onClick={closeMobileMenu}
                                        >
                                            Contact
                                        </Link>
                                    </nav>
                                </div>

                                {/* Bottom Section */}
                                <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                                    {/* Login Button - Mobile */}
                                    <a
                                        href="#"
                                        className="block w-full text-center text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 border border-gray-300 dark:border-gray-600"
                                    >
                                        Log in
                                    </a>

                                    {/* Get Started Button - Mobile */}
                                    <a
                                        href="#"
                                        className="block w-full text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </header>
            {/* Spacer to prevent content from being hidden behind fixed header */}
            <div className="h-16 lg:h-20"></div>
        </>
    );
};

export default Header;