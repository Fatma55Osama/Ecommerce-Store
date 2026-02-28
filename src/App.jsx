import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ContactUs from './Pages/Contactus'
import MainLayoutAdmin from './Components/MainLayoutAdmin'
import Dashboard from './Pages/SectionAdmin/Dashboard'
import AllProduct from './Pages/SectionAdmin/AllProduct'
import AddProduct from './Pages/SectionAdmin/AddProduct'
import AllCategories from './Pages/SectionAdmin/AllCategories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AddCategory from './Pages/SectionAdmin/AddCategory'
import Shop from './Pages/Shop'
import VeiwCart from './Pages/VeiwCart'
const queryClient = new QueryClient()
export default function App() {
  // utilties هي الكلاسات الجاهزة اللي تويست فاي موفرها
  // custom class كلاسات انت بتعملها بنفسك مثلا w-[205px] w-[calc(100%)] bg-[#b8b8b8]

  return (
 
    <QueryClientProvider client={queryClient}>
      <div className='App min-h-screen flex flex-col'>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/features' element={<h1>Features Page</h1>} />
            <Route path='/Blog' element={<h1>Blog Page</h1>} />
            <Route path='/About' element={<About />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/veiwcart' element={<VeiwCart/>}/>
          </Route>
          <Route path='/'>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Route>

          <Route path='/' element={<MainLayoutAdmin />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/allproduct' element={<AllProduct />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/allcategories' element={<AllCategories />} />
            <Route path='/addcategory' element={<AddCategory />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>


  )
}
