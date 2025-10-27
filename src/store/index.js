import { create } from "zustand";

export const pathsnav = create(() => ({
  navItems: [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Features", path: "/features" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
}));
export const usepathsnavadmin = create(() => ({
  navItemsadmin: [
    {name:"Dashboard",icon:"TfiDashboard", link:[{label:"Dashboard",path:"/dashboard"}]},
    {
      name: "Products",
      icon:"MdOutlineProductionQuantityLimits",
      link: [
        { label: "AllProduct", path: "/allproduct" },
        { label: "AddProduct", path: "/addproduct" },
        { label: "ProductDetails", path: "/productdetails" },
      ],
    },
     {
      name: "Categories",
      icon:"TbCategoryFilled",
      link: [
        { label: "AllCategories", path: "/allcategories" },
        { label: "AddCategory", path: "/addcategory" },
        { label: "CategoryDetails", path: "/categorydetails" },
      ],
    },
      {
      name: "Contact",
      icon:"RiContactsLine",
      link: [{ label: "Contact", path: "/contactadmin" }],
    },
     {
      name: "Authentication",
      icon:"BiLogOutCircle",
      link: [
        { label: "Login", path: "/login" },
        { label: "Register", path: "/register" },
        { label: "ForgotPassword", path: "/forgotpassword" },
        { label: "Logout", path: "/logout" }
      ],
    },
    
  ],
}));

export const useCartmodal = create((set) => ({
  modalindex: false,
  openModal: () => set(() => ({ modalindex: true })),
  closeModal: () => set(() => ({ modalindex: false })),
}));
export const usedomain = create(() => ({
  domain: "https://localhost:7224",
}));
