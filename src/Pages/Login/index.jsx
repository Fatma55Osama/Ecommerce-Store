import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import girles from '../../assets/colors-that-go-with-cream.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { usedomain } from '../../store'
import { postlogin } from '../../Data/API/postlogin'
import { toast, ToastContainer, Bounce } from 'react-toastify';
export default function Login() {
    const { domain } = usedomain()
    const navigate =useNavigate()
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('email is required'),
        password: Yup.string().required('password is required'),
        rememberMe: Yup.boolean()
    })
    const handleLogin = (values) => {
        console.log('values', values)
        postlogin(domain, values)
            .then((res) => {
                console.log("Token", res.data.token)

                if (res?.status === 200 || res?.status === 201) {
                 
                    if (values.rememberMe) {
                        localStorage.setItem("Token", res.data.token)
                    } else {
                        sessionStorage.setItem("Token", res.data.token)
                    }
                    toast.success('Successfully login')
                    setTimeout(() => {
                    navigate('/')

                }, 2000)
                } else {
                    toast.error('Error login')
                }
            })
            .catch((err) => {
                toast.error('Error Wrong email or password')
                console.error(err)
            })}

        return (
            <div className='bg-[#f8f7fe] h-screen grid grid-cols-2'>
                <div className=' px-20 flex items-center justify-center '>
                    <div className=' h-full w-full flex flex-col justify-center gap-3 py-11'>
                        <h2 className='font-bold text-[24px]'>Welcom to Mode Shope</h2>
                        <h3>Enter your login detail please</h3>
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
                        <Formik validationSchema={validationSchema} initialValues={{ email: "", password: "", rememberMe: false }} onSubmit={handleLogin}>
                            <Form className='flex flex-col justify-between gap-7 '>
                                <div className='flex flex-col gap-5'>
                                    <div>
                                        <Field name="email" type="email" placeholder="Email Address" className="mt-1 px-3 w-full py-2 border border-gray-300 rounded-4xl focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                        <ErrorMessage name='email' component='div' className="text-red-500 text-xs  mt-1" />
                                    </div>
                                    <div>
                                        <Field name="password" type="password" placeholder="password" className="mt-1 px-3 w-full py-2 border border-gray-300 rounded-4xl focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                        <ErrorMessage name='password' component='div' className="text-red-500 text-xs mt-1" />

                                    </div>
                                </div>

                                <div className='flex justify-between'>
                                    <label className='flex gap-1'>
                                        <Field name="rememberMe" type="checkbox" />
                                        Keep me logged in

                                    </label>
                                    <p>Forget Password</p>
                                </div>
                                <button type='submit' className='text-white w-full py-2 rounded-3xl font-bold bg-black'>Login</button>
                                <p>Don't have an account? <Link to={'/register'}>Sign up</Link> </p>
                            </Form>
                        </Formik>
                    </div>

                </div>
                <div className='bg-[#ffd8be] flex justify-center items-center bg'>
                    <img src={girles} className='rounded-[50%/70%] object-cover  w-[400px] h-[500px]' alt="" />
                </div>
            </div>
        )
    }
