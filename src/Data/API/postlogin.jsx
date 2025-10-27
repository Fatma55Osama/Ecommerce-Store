import axios from "axios"

export const postlogin = (domain, values) => {
   const data = {
        "emailAddress": values.email,
        "password": values.password,
        "rememberMe": values.rememberMe
    }
    return axios.post(`${domain}/api/Account/Login`, data, {
        headers: {
      "Content-Type": "application/json"  
    }}).then((res)=>{
        console.log(res)
        return res
      }).catch((err)=>{console.log(err)})

}