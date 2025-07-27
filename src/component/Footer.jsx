import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
    const [openSections, setOpenSections] = useState({
        company: false,
        customerService: false,
        shopping: false,
        account: false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <>
            <footer className="bg-white antialiased dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    {/* Main Footer Content */}
                    <div className="border-b border-gray-100 py-8 dark:border-gray-700 md:py-12 lg:py-16">
                        <div className="items-start gap-8 md:gap-12 lg:flex 2xl:gap-24">
                            {/* Left Column - Quick Links */}
                            <div className="grid min-w-0 flex-1 grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 xl:grid-cols-4">
                                {/* Company */}
                                <div>
                                    <button
                                        onClick={() => toggleSection('company')}
                                        className="flex w-full items-center justify-between text-left md:cursor-default"
                                    >
                                        <h6 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white md:mb-6">
                                            Company
                                        </h6>
                                        <svg
                                            className={`h-4 w-4 transform transition-transform md:hidden ${openSections.company ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <ul className={`space-y-3 md:space-y-4 ${openSections.company ? 'block' : 'hidden md:block'}`}>
                                        <li>
                                            <Link
                                                to="/about"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/careers"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Careers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/press"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Press
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Customer Service */}
                                <div>
                                    <button
                                        onClick={() => toggleSection('customerService')}
                                        className="flex w-full items-center justify-between text-left md:cursor-default"
                                    >
                                        <h6 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white md:mb-6">
                                            Customer Service
                                        </h6>
                                        <svg
                                            className={`h-4 w-4 transform transition-transform md:hidden ${openSections.customerService ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <ul className={`space-y-3 md:space-y-4 ${openSections.customerService ? 'block' : 'hidden md:block'}`}>
                                        <li>
                                            <Link
                                                to="/contact"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/help"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Help Center
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/faq"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                FAQs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/support"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Support
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Shopping */}
                                <div>
                                    <button
                                        onClick={() => toggleSection('shopping')}
                                        className="flex w-full items-center justify-between text-left md:cursor-default"
                                    >
                                        <h6 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white md:mb-6">
                                            Shopping
                                        </h6>
                                        <svg
                                            className={`h-4 w-4 transform transition-transform md:hidden ${openSections.shopping ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <ul className={`space-y-3 md:space-y-4 ${openSections.shopping ? 'block' : 'hidden md:block'}`}>
                                        <li>
                                            <Link
                                                to="/products"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                All Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/deals"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Deals & Offers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/new-arrivals"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                New Arrivals
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/trending"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Trending
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Account */}
                                <div>
                                    <button
                                        onClick={() => toggleSection('account')}
                                        className="flex w-full items-center justify-between text-left md:cursor-default"
                                    >
                                        <h6 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white md:mb-6">
                                            Account
                                        </h6>
                                        <svg
                                            className={`h-4 w-4 transform transition-transform md:hidden ${openSections.account ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <ul className={`space-y-3 md:space-y-4 ${openSections.account ? 'block' : 'hidden md:block'}`}>
                                        <li>
                                            <Link
                                                to="/login"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Sign In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/register"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Create Account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/orders"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Order History
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/wishlist"
                                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Wishlist
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column - Newsletter & App */}
                            <div className="mt-8 w-full md:mt-12 lg:mt-0 lg:max-w-md">
                                <div className="space-y-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 p-6 dark:from-gray-700 dark:to-gray-800 md:p-8">
                                    {/* Newsletter */}
                                    {/* <div>
                                        <h6 className="mb-3 text-base font-semibold text-gray-900 dark:text-white md:mb-4 md:text-lg">
                                            Stay Updated
                                        </h6>
                                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                            Get the latest deals, product updates, and exclusive offers delivered to your inbox.
                                        </p>
                                        <form className="space-y-3">
                                            <div className="relative">
                                                <input
                                                    className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                    placeholder="Enter your email address"
                                                    type="email"
                                                    required
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full rounded-lg bg-primary-600 px-4 py-3 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-500"
                                            >
                                                Subscribe
                                            </button>
                                        </form>
                                    </div> */}

                                    {/* App Download */}
                                    <div>
                                        <h6 className="mb-3 text-base font-semibold text-gray-900 dark:text-white md:mb-4 md:text-lg">
                                            Download Our App
                                        </h6>
                                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                            Shop on the go with our mobile app. Available on iOS and Android.
                                        </p>
                                        <div className="space-y-3">
                                            <a
                                                href="#"
                                                className="flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600"
                                            >
                                                <svg className="mr-3 h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.78 2.67-3.53 3.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                                </svg>
                                                <div className="text-left">
                                                    <div className="text-xs">Download on the</div>
                                                    <div className="text-sm font-semibold">App Store</div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600"
                                            >
                                                <svg className="mr-3 h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                                </svg>
                                                <div className="text-left">
                                                    <div className="text-xs">Get it on</div>
                                                    <div className="text-sm font-semibold">Google Play</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="py-6 md:py-8">
                        <div className="space-y-6   xl:flex xl:items-center xl:justify-between xl:space-y-0">
                            {/* Logo & Copyright */}
                            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6 ">
                                <Link to="/" className="flex items-center space-x-1">
                                    <div className="rounded-lg flex items-center justify-center">
                                        <img className="w-[100px] h-[80px] object-contain" src="https://ik.imagekit.io/anonymousiva/React_project/Ecom_website/ecom.jpg?updatedAt=1753562014662" alt="" />
                                    </div>
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">S-Shop</span>
                                </Link>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    © 2025 S-Shop. All rights reserved. By <span className="font-semibold"><Link to={"/"}>Sunrish</Link></span>
                                </p>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap items-center gap-4 text-sm md:gap-6">
                                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link to="/terms" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                                <Link to="/shipping" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                    Shipping Info
                                </Link>
                                <Link to="/returns" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                    Returns
                                </Link>
                            </div>

                            {/* Social Media */}
                            <div className="flex items-center justify-center space-x-4 xl:justify-end">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                                    aria-label="YouTube"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;