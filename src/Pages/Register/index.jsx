import React, { useState } from 'react';
import logo from '../../assets/logo-01.png';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { postregister } from '../../Data/API/postregister';
import { usedomain } from '../../store';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [preview, setPreview] = useState(null);
    // const [, setFieldValue] = useState(null)
    const { domain } = usedomain()
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        FirstName: Yup.string().required('First Name is required'),
        LastName: Yup.string().required('Last Name is required'),
        Email: Yup.string().email('Invalid email').required('Email is required'),
        Address: Yup.string().required('Address is required'),
        PhoneNumber: Yup.string().required('Phone Number is required').matches(/^01[0-9]{9}$/, 'Invalid phone number format. Must be an Egyptian or international number'),
        Gender: Yup.string().required('Gender is required'),
        Role: Yup.string().required('Role is required'),
        SecretKey: Yup.string().matches(/^SECRET_[A-Za-z0-9_]+$/, 'Secret Key is not valid'),
        Password: Yup.string().required('Password is required').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
            ' password must have at least one uppercase letter, one lowercase letter, one digit, and one special character.'
        ),
        ConfirmPassword: Yup.string()
            .oneOf([Yup.ref('Password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });


    const handleRegister = (values, { resetForm }) => {
        // const isRegistered = localStorage.getItem("isRegistered");

        // if (isRegistered) {
        //     toast.info("You are already registered.");
        //     return;
        // }
        console.log('Form Submitted', values);
        postregister(domain, values).then((res) => {
            if (res?.status === 200 || res?.status === 201) {
                toast.success('Successfully Registered');
                resetForm()
                setTimeout(() => {
                    navigate('/login')

                }, 2000)
            }
        }).catch((err) => {
            toast.error('Error in Register')
        })
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-xl px-10 py-8 my-10 w-full max-w-xl">
                {/* Logo + Title */}
                <div className="text-center mb-8">
                    <img src={logo} alt="Logo" className="mx-auto w-20 mb-4" />
                    <h2 className="text-2xl font-bold text-black">Create Your Account</h2>
                    <p className="text-sm text-gray-500" >Sign up to access Coza Store</p>
                </div>

                {/* Form */}
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
                <Formik
                    initialValues={{
                        FirstName: '',
                        LastName: '',
                        Email: '',
                        Address: '',
                        PhoneNumber: '',
                        Gender: '',
                        Password: '',
                        ConfirmPassword: '',
                        SecretKey: '',
                        Role: '',
                        ProfilePicturePath: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                >
                    {({ setFieldValue }) => {
                        return (
                            <Form className="space-y-4">
                                {/* Input Fields */}
                                {[
                                    { label: 'First Name', name: 'FirstName', type: 'text' },
                                    { label: 'Last Name', name: 'LastName', type: 'text' },
                                    { label: 'Email', name: 'Email', type: 'email' },
                                    { label: 'Address', name: 'Address', type: 'text' },
                                    { label: 'Phone Number', name: 'PhoneNumber', type: 'text' },
                                ].map(({ label, name, type }) => (
                                    <div key={name} className="flex flex-col">
                                        <label className="text-sm text-gray-700 font-medium">{label}</label>
                                        <Field
                                            type={type}
                                            name={name}
                                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            placeholder={`Enter ${label.toLowerCase()}`}
                                        />
                                        <ErrorMessage name={name} component="div" className="text-red-500 text-xs mt-1" />
                                    </div>
                                ))}

                                {/* Gender */}
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700 font-medium">Gender</label>
                                    <div className="flex gap-6 mt-2">
                                        <label className="flex items-center gap-2 text-gray-600">
                                            <Field type="radio" name="Gender" value="Female" />
                                            Female
                                        </label>
                                        <label className="flex items-center gap-2 text-gray-600">
                                            <Field type="radio" name="Gender" value="Male" />
                                            Male
                                        </label>
                                    </div>
                                    <ErrorMessage name="Gender" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                {/*Role*/}
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700 font-medium">Role</label>
                                    <div className="flex gap-6 mt-2">
                                        <label className="flex items-center gap-2 text-gray-600">
                                            <Field type="radio" name="Role" value="Admin" />
                                            Admin
                                        </label>
                                        <label className="flex items-center gap-2 text-gray-600">
                                            <Field type="radio" name="Role" value="User" />
                                            User
                                        </label>
                                    </div>
                                    <ErrorMessage name="Role" component="div" className="text-red-500 text-xs mt-1" />
                                </div>

                                {/* Password */}
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700 font-medium">Password</label>
                                    <Field
                                        type="password"
                                        name="Password"
                                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter your password"
                                    />
                                    <ErrorMessage name="Password" component="div" className="text-red-500 text-xs mt-1" />
                                </div>

                                {/* Confirm Password */}
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700 font-medium">Confirm Password</label>
                                    <Field
                                        type="password"
                                        name="ConfirmPassword"
                                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Confirm your password"
                                    />
                                    <ErrorMessage name="ConfirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                                </div>

                                {/*SecretKey*/}
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-700 font-medium">SecretKey</label>
                                    <Field
                                        type="text"
                                        name="SecretKey"
                                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter your secret key"
                                    />
                                    <ErrorMessage name="SecretKey" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                {/* 
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-700 font-medium">Profile Picture</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="mt-1"
                                onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    if (file) {
                                        setFieldValue('ProfilePicturePath', file);
                                        setPreview(URL.createObjectURL(file));
                                    }
                                }}
                            />
                            <ErrorMessage name="ProfilePicturePath" component="div" className="text-red-500 text-xs mt-1" />
                        </div> */}

                                {/* Image Preview */}
                                {/* {preview && (
                            <div className="mt-2">
                                <p className="text-sm text-gray-600 mb-1">Preview:</p>
                                <img src={preview} alt="preview" className="w-24 h-24 rounded-full object-cover border" />
                            </div>
                        )} */}

                                <div className="flex flex-col items-start ">
                                    <label className="text-sm text-gray-700 font-medium mb-2">
                                        Profile Picture
                                    </label>

                                    {/* Avatar Preview */}
                                    <div className="w-28 h-28 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden shadow-sm bg-gray-50">
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-gray-400 text-xs">No Image</span>
                                        )}
                                    </div>

                                    {/* Custom Upload Button */}
                                    <label
                                        htmlFor="profile-upload"
                                        className="mt-3 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg cursor-pointer hover:bg-black transition"
                                    >
                                        Upload Image
                                    </label>
                                    <input
                                        id="profile-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(event) => {
                                            const file = event.currentTarget.files[0];
                                            if (file) {
                                                setFieldValue('ProfilePicturePath', file);
                                                setPreview(URL.createObjectURL(file));
                                            }
                                        }}
                                    />
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full text-white  py-2 rounded-3xl font-bold bg-black  transition duration-200"
                                >
                                    Sign Up
                                </button>
                            </Form>
                        )

                    }}

                </Formik>
            </div>
        </div>
    );
}
