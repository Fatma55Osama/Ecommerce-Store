import axios from "axios"

export const storecategoryadmin =async(domain,tokenAdmin)=>{
    let final =[]
    await axios.get(`${domain}/api/Category`,{
         headers:{
        Authorization:`Bearer ${tokenAdmin}`
    }
    }
        
    ).then((res)=>{
        final =res.data
    }).catch((err)=>{console.log(err)})
 return final
}