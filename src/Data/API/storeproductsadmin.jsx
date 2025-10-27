import axios from "axios"

export const storeproductsadmin =async(domain,tokenAdmin)=>{
    let final =[]
    await axios.get(`${domain}/api/Product`,{
        headers:{
            Authorization:`Bearer ${tokenAdmin}`
        }
    }).then((res)=>{final =res.data}).catch((err)=>{console.log(err)})
}