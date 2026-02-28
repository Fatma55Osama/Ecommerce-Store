import axios from "axios"

export const Postcategory = (domain, tokenAdmin, values) => {
    const data = {
        "name": values.name,
        "description": values.description
    }
    return axios.post(`${domain}/api/Category`, data).then((res) => {
        return res
    }).catch((err) => {
        console.log(err)
        throw err
    })

}