import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import * as Yup from "yup";
import './index.scss'
export default function AddProduct() {
    const validationSchema = Yup.object({
        name: Yup.string().required("Product name is required"),
        description: Yup.string().required("Product description is required"),
        price: Yup.number().typeError("Price must be a number").positive("Price must be positive").required("Price is required"),
        quantity: Yup.number().typeError("Quantity must be a number").min(1, "At least one item").required("Quantity is required"),
        color: Yup.string().required("Product color is required"),
        tag: Yup.string().required("Product tag is required"),
    });

    const handleAddProduct = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <div className="w-full h-screen hide-scrollbar overflow-y-auto  bg-[#f5f7fb] flex flex-col p-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-[#444] text-lg font-medium mb-8">
                <span>Products</span>
                <IoIosArrowForward className="mx-2 text-gray-500" />
                <MdOutlineProductionQuantityLimits className="text-xl text-gray-600" />
                <IoIosArrowForward className="mx-2 text-gray-500" />
                <span className="text-sm text-gray-500">Add Product</span>
            </div>

            {/* Form Section */}
            <div className="flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                        Add New Product
                    </h2>

                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{ name: "", description: "", price: "", quantity: "", color: "", tag: "" }}
                        onSubmit={handleAddProduct}
                    >
                        <Form className="flex flex-col gap-5">
                            {/* Product Name */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="text-gray-700 font-medium mb-1"
                                >
                                    Product Name
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Enter product name"
                                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="quantity"
                                        className="text-gray-700 font-medium mb-1"
                                    >
                                        Product Quantity
                                    </label>
                                    <Field
                                        type="number"
                                        name="quantity "
                                        placeholder="Enter product Quantity "
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    />
                                    <ErrorMessage
                                        name="quantity"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="price"
                                        className="text-gray-700 font-medium mb-1"
                                    >
                                        Product Price
                                    </label>
                                    <Field
                                        type="number"
                                        name="price"
                                        placeholder="Enter product price"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    />
                                    <ErrorMessage
                                        name="price"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="quantity"
                                        className="text-gray-700 font-medium mb-1"
                                    >
                                        Product Color
                                    </label>
                                    <Field
                                        type="text"
                                        name="color "
                                        placeholder="Enter product Color "
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    />
                                    <ErrorMessage
                                        name="color"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="tag"
                                        className="text-gray-700 font-medium mb-1"
                                    >
                                        Product Tag
                                    </label>
                                    <Field
                                        type="text"
                                        name="tag"
                                        placeholder="Enter product Tag"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    />
                                    <ErrorMessage
                                        name="tag"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>
                            {/* Product Description */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="description"
                                    className="text-gray-700 font-medium mb-1"
                                >
                                    Product Description
                                </label>
                                <Field
                                    as="textarea"
                                    name="description"
                                    placeholder="Enter product description"
                                    className="border border-gray-300 rounded-lg p-2 h-24 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Add Product
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}
