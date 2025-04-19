// app/product/page.tsx (or pages/product.tsx)
"use client"; // Add this directive if using the App Router

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link"; // Use next/link for internal links, <a> for external

// --- 1. Sample Product Data (Replace with actual data fetching logic) ---
const productData = {
    imageUrl: "/placeholder-product.jpg", // Place an image in your public folder
    title: "High-Performance Laptop XYZ",
    price: "$1,299.99",
    link: "https://example.com/product/xyz", // Example external link
    description:
        "Experience blazing fast performance with the latest generation processor and stunning visuals on the high-resolution display. Perfect for professionals and creatives on the go.",
};

// --- Interface for Form Data ---
interface ProductAttributes {
    cpu: string;
    memory: string;
    disk: string;
    screenSize: string;
    yearBought: string;
    yearLaunch: string;
}

export default function ProductPage() {
    // --- State for the Attribute Form ---
    const [attributes, setAttributes] = useState<ProductAttributes>({
        cpu: "",
        memory: "",
        disk: "",
        screenSize: "",
        yearBought: "",
        yearLaunch: "",
    });

    // --- Handle Input Changes ---
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAttributes((prevAttributes) => ({
            ...prevAttributes,
            [name]: value,
        }));
    };

    // --- Handle Form Submission ---
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted Attributes:", attributes);
        // Here you would typically send the 'attributes' data to your backend API
        alert("Attributes submitted! (Check console)");
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* --- Section 1: Product Details (Read-Only) --- */}
            <section className="mb-12 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
                    Product Details
                </h1>
                <div className="md:flex md:space-x-8">
                    {/* 1.1 Product Image */}
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                        <Image
                            src={productData.imageUrl}
                            alt={productData.title}
                            width={300} // Provide appropriate width
                            height={300} // Provide appropriate height
                            className="rounded-lg object-cover shadow-sm"
                            priority // Add priority if it's Above The Fold
                        />
                    </div>

                    <div className="md:w-2/3">
                        {/* 1.2 Product Title */}
                        <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                            {productData.title}
                        </h2>

                        {/* 1.3 Product Price */}
                        <p className="text-xl font-bold text-indigo-600 mb-4">
                            {productData.price}
                        </p>

                        {/* 1.4 Product Link */}
                        <div className="mb-4">
                            <a
                                href={productData.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline transition duration-150 ease-in-out inline-flex items-center"
                            >
                                View Product Page
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        </div>

                        {/* 1.5 Product Description */}
                        <p className="text-gray-700 leading-relaxed">
                            {productData.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Product Attribute Form (Editable) --- */}
            <section className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
                    Update Product Attributes
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* 2.1 CPU */}
                        <div>
                            <label
                                htmlFor="cpu"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                CPU
                            </label>
                            <input
                                type="text"
                                id="cpu"
                                name="cpu"
                                value={attributes.cpu}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                placeholder="e.g., Intel Core i7-12700H"
                            />
                        </div>

                        {/* 2.2 Memory */}
                        <div>
                            <label
                                htmlFor="memory"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Memory (RAM)
                            </label>
                            <input
                                type="text"
                                id="memory"
                                name="memory"
                                value={attributes.memory}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                placeholder="e.g., 16GB DDR5"
                            />
                        </div>

                        {/* 3.3 Disk */}
                        <div>
                            <label
                                htmlFor="disk"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Disk (Storage)
                            </label>
                            <input
                                type="text"
                                id="disk"
                                name="disk"
                                value={attributes.disk}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                placeholder="e.g., 1TB NVMe SSD"
                            />
                        </div>

                        {/* 3.4 Screen Size */}
                        <div>
                            <label
                                htmlFor="screenSize"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Screen Size
                            </label>
                            <input
                                type="text"
                                id="screenSize"
                                name="screenSize"
                                value={attributes.screenSize}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                placeholder='e.g., 15.6"'
                            />
                        </div>

                        {/* 3.5 Year Bought */}
                        <div>
                            <label
                                htmlFor="yearBought"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Year Bought
                            </label>
                            <input
                                type="number" // Use number type for years
                                id="yearBought"
                                name="yearBought"
                                value={attributes.yearBought}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                placeholder="e.g., 2023"
                                min="1980" // Optional: add min/max
                                max={new Date().getFullYear()} // Optional: set max to current year
                            />
                        </div>

                        {/* 3.6 Year Launch */}
                        <div>
                            <label
                                htmlFor="yearLaunch"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Year Launch (Model Year)
                            </label>
                            <input
                                type="number" // Use number type for years
                                id="yearLaunch"
                                name="yearLaunch"
                                value={attributes.yearLaunch}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                placeholder="e.g., 2022"
                                min="1980" // Optional: add min/max
                                max={new Date().getFullYear()} // Optional: set max to current year
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 text-right">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                        >
                            Save Attributes
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
