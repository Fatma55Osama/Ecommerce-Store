import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import * as Yup from "yup";
import "./index.scss";
import { Bounce, ToastContainer } from "react-toastify";
import ReactQuill from "react-quill-new";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { TagsInput } from "react-tag-input-component";
export default function AddProduct() {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState(["clothes"]);
  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Product description is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be positive")
      .required("Price is required"),
    quantity: Yup.number()
      .typeError("Quantity must be a number")
      .min(1, "At least one item")
      .required("Quantity is required"),
    color: Yup.string().required("Product color is required"),
    tag: Yup.string().required("Product tag is required"),
  });

  const handleAddProduct = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="w-full hide-scrollbar overflow-y-auto h-[calc(100vh-120px)] bg-[#f5f7fb] flex flex-col p-6">
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
        <div className="w-full">
          <Formik
            validationSchema={validationSchema}
            initialValues={{ name: "", description: "" }}
            onSubmit={handleAddProduct}
          >
            <Form className="flex flex-col gap-5">
              {/* Category Name */}
              <div className="  border-1 border-[#dee2e6]  shadow -[0 .125rem .25rem rgba( 33, 37, 41), 0.075)] bg-white rounded-[0.25rem]">
                <div className="card-header border-1 border-[#dee2e6] p-[1rem] ">
                  <h5 className="text-[1.00625rem] font-[600]">
                    Product information
                  </h5>
                </div>
                <div className="card-body p-[.8rem]">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[0.875rem] pb-3">
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter product name"
                      className="border-1 border-gray-300 bg-white rounded-[0.25rem] px-[.5rem] py-[.5rem] text-[0.875rem] focus:ring-[0.8px] focus:ring-blue-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-[0.75rem] mt-1"
                    />
                  </div>
                  {/* Product Description */}
                  <div className="border-1 border-[#dee2e6] shadow bg-white rounded-[0.25rem]">
                    <div className="card-body p-[.8rem]">
                      <label
                        htmlFor="description"
                        className="text-[0.875rem] pb-3 block"
                      >
                        Product Description{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <Field name="description">
                        {({ field, form }) => (
                          <ReactQuill
                            theme="snow"
                            value={field.value}
                            onChange={(value) =>
                              form.setFieldValue("description", value)
                            }
                            placeholder="Type your text here..."
                            className="bg-white rounded-[0.25rem]"
                          />
                        )}
                      </Field>

                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500 text-[0.8rem] mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <label htmlFor="Price " className="text-[0.875rem] pb-3">
                        Product Price <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="Price"
                        placeholder="Enter product name"
                        className="border-1 border-gray-300 bg-white rounded-[0.25rem] px-[.5rem] py-[.5rem] text-[0.875rem] focus:ring-[0.8px] focus:ring-blue-400 focus:outline-none"
                      />
                      <ErrorMessage
                        name="Price"
                        component="div"
                        className="text-red-500 text-[0.75rem] mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="quantity"
                        className="text-[0.875rem] pb-3"
                      >
                        Product Quantity <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="quantity"
                        placeholder="Enter product quantity"
                        className="border-1 border-gray-300 bg-white rounded-[0.25rem] px-[.5rem] py-[.5rem] text-[0.875rem] focus:ring-[0.8px] focus:ring-blue-400 focus:outline-none"
                      />
                      <ErrorMessage
                        name="quantity"
                        component="div"
                        className="text-red-500 text-[0.75rem] mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 items-center gap-3">
                    <div className="flex flex-col">
                      <label htmlFor="color" className="text-[0.875rem] pb-3">
                        Color <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="color"
                        as="select"
                        className="border-1 border-gray-300 bg-white rounded-[0.25rem] px-[.5rem] py-[.5rem] text-[0.875rem] focus:ring-[0.8px] focus:ring-blue-400 focus:outline-none"
                      >
                        <option value="">Select color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                      </Field>

                      <ErrorMessage
                        name="color"
                        component="div"
                        className="text-red-500 text-[0.75rem] mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="rating" className="text-[0.875rem] pb-3">
                        Product Rating <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <FaStar
                            key={num}
                            className={`cursor-pointer text-2xl ${
                              num <= rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            onClick={() => setRating(num)}
                          />
                        ))}
                      </div>
                      <ErrorMessage
                        name="rating"
                        component="div"
                        className="text-red-500 text-[0.75rem] mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <label
                        htmlFor="category"
                        className="text-[0.875rem] pb-3"
                      >
                        Category <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        as="select"
                        name="category"
                        placeholder="Enter product name"
                        className="border-1 border-gray-300 bg-white rounded-[0.25rem] px-[.5rem] py-[.5rem] text-[0.875rem] focus:ring-[0.8px] focus:ring-blue-400 focus:outline-none"
                      >
                        <option value="">Select category</option>
                        <option value="1">Clothing</option>
                        <option value="2">Jackets</option>
                        <option value="3">Shoes</option>
                      </Field>
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="text-red-500 text-[0.75rem] mt-1"
                      />
                    </div>
                    <div className="flex flex-col shadow border-1 border-gray-300  rounded-[0.25rem] px-[.5rem] py-[.5rem]">
                      <label
                        htmlFor="quantity"
                        className="text-[0.875rem] pb-3"
                      >
                        Product Tag <span className="text-red-500">*</span>
                      </label>
                      <TagsInput
                        value={selected}
                        onChange={setSelected}
                        name="tags"
                        placeHolder="Enter tags here"
                        classNames='focus:ring-[0.8px] focus:ring-blue-400 focus:outline-none'
                      />
                      <ErrorMessage
                        name="tags"
                        component="div"
                        className="text-red-500 text-[0.75rem] mt-1"
                      />
                    </div>
                  </div>

                  <div className="border-1 border-[#dee2e6] shadow bg-white rounded-[0.25rem]">
                    <div className="card-body p-[.7rem]">
                      <label className="text-[0.875rem] pb-3 block">
                        Product image <span className="text-red-500">*</span>
                      </label>

                      <label
                        htmlFor="img"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        {preview ? (
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-[100px] h-[100px] object-cover rounded-md border"
                          />
                        ) : (
                          <>
                            <RiUploadCloud2Fill className="text-5xl text-[#6c757d]" />
                            <h5 className="text-sm text-[#212529] font-[600]">
                              Drop files here or click to upload.
                            </h5>
                          </>
                        )}
                      </label>

                      <Field name="img">
                        {({ form }) => (
                          <input
                            id="img"
                            name="img"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              form.setFieldValue("img", file);
                              if (file) {
                                setFileName(file.name);
                                setPreview(URL.createObjectURL(file));
                              }
                            }}
                          />
                        )}
                      </Field>

                      {/* اسم الملف أو نص بسيط تحت الصورة */}
                      {fileName && (
                        <p className="text-gray-600 text-[0.8rem] mt-2">
                          Selected:{" "}
                          <span className="font-medium">{fileName}</span>
                        </p>
                      )}

                      <ErrorMessage
                        name="img"
                        component="div"
                        className="text-red-500 text-[0.8rem] mt-2"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-[#396cf0] text-white font-[600] px-4 py-2 mr-7 rounded-md">
                      Add Product
                    </button>{" "}
                  </div>
                </div>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
