import axios from "axios"

export const postregister =  (domain, values) => {
  const formData = new FormData();
  formData.append("FristName", values.FirstName);
  formData.append("LastName", values.LastName);
  formData.append("Email", values.Email);
  formData.append("Address", values.Address);
  formData.append("PhoneNumber", values.PhoneNumber);
  formData.append("Role",values.Role)
  formData.append("Password", values.Password);
  formData.append("ConfirmPassword", values.ConfirmPassword);
  formData.append("Gender", values.Gender);
  formData.append('SecretKey',values.SecretKey)
  if (values.ProfilePicturePath) {
    formData.append("ProfilePicturePath", values.ProfilePicturePath)
  }
   return axios.post(`${domain}/api/Account/Register`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }).then((res) => {
    console.log(res)
    return res
  }).catch((err) => { console.log(err)
    throw err
   })
}