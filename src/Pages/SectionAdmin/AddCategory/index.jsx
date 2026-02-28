import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Bounce, toast, ToastContainer } from "react-toastify";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as Yup from "yup";
import { usedomain } from "../../../store";
import { Postcategory } from "../../../Data/API/Postcategory";
import { RiUploadCloud2Fill } from "react-icons/ri";

export default function AddCategory() {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");

  const { domain } = usedomain();
  const tokenAdmin =
    sessionStorage.getItem("tokenAdmin") || localStorage.getItem("tokenAdmin");
  const validationSchema = Yup.object({
    name: Yup.string().required(
      "A product name is required and recommended to be unique."
    ),
    description: Yup.string().required(
      "Set a description to the product for better visibility."
    ),
  });

  const handleAddCategory = (values, { resetForm }) => {
    console.log(values);
    Postcategory(domain, tokenAdmin, values)
      .then((res) => {
        if (res?.status === 200 || res?.status === 201) {
          toast.success("Category added successfully!");
        } else {
          toast.error("Failed to add category.");
        }
      })
      .catch((err) => {
        toast.error("An error occurred while adding the category.");
      });
    resetForm();
  };

  return (
    <div className="w-full hide-scrollbar overflow-y-auto h-[calc(100vh-120px)] bg-[#f5f7fb] flex flex-col p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-[#444] text-lg font-medium mb-4">
        <span>Categories</span>
        <IoIosArrowForward className="mx-2 text-gray-500" />
        <TbCategoryFilled className="text-xl text-gray-600" />
        <IoIosArrowForward className="mx-2 text-gray-500" />
        <span className="text-sm text-gray-500">Add Category</span>
      </div>
      
      <div className="flex justify-center">
        <div className="w-full">
      
          <Formik
            validationSchema={validationSchema}
            initialValues={{ name: "", description: "" }}
            onSubmit={handleAddCategory}
          >
            <Form className="flex flex-col gap-5">
              {/* Category Name */}
              <div className="  border-1 border-[#dee2e6]  shadow -[0 .125rem .25rem rgba( 33, 37, 41), 0.075)] bg-white rounded-[0.25rem]">
                <div className="card-header border-1 border-[#dee2e6] p-[1rem] ">
                  <h5 className="text-[1.00625rem] font-[600]">
                    Category information
                  </h5>
                  {/* <Field
                    type="text"
                    name="name"
                    placeholder="Enter category name"
                    className="border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  /> */}
                </div>
                <div className="card-body p-[.8rem]">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[0.875rem] pb-3">
                      Category Name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter category name"
                      className="border-1 border-gray-300 bg-white rounded-[0.25rem] px-[.5rem] py-[.5rem] text-[0.875rem] focus:ring-[0.8px] focus:ring-blue-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-[0.75rem] mt-1"
                    />
                  </div>
                  {/* Category Description */}
                  <div className="border-1 border-[#dee2e6] shadow bg-white rounded-[0.25rem]">
                    <div className="card-body p-[.8rem]">
                      <label
                        htmlFor="description"
                        className="text-[0.875rem] pb-3 block"
                      >
                        Category Description{" "}
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

                      {/* <p className="text-gray-500 text-[0.8rem] mt-2">
                        Set a description to the product for better visibility.
                      </p> */}
                    </div>
                  </div>
                  <div className="border-1 border-[#dee2e6] shadow bg-white rounded-[0.25rem]">
                    <div className="card-body p-[.7rem]">
                      <label className="text-[0.875rem] pb-3 block">
                        Category img <span className="text-red-500">*</span>
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
                      Add Category
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
