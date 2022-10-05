import Input from "../components/Input"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from "../components/Button"
import { getRandomUser } from '../api/randomUser'
import { UserContext } from "../contexts/User"
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"


const Login = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  const formik = useFormik({
    initialValues:{
      email:"sd@qsd.fdd",
      password:"SSdd22@ssss"
    },
    // validateOnChange: false,
    onSubmit: async (values) => {
      const data = await getRandomUser()
      console.log(values)
      console.log(data.results[0])
      navigate('/profile')
      setUser(data.results[0])
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("email is required")
        .email('Not an email'),
      password: Yup.string()
        .required('Password is required')
        .min(8, "Password must be more than 8 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain One Uppercase, One Lowercase, One Number and One Special Case Character"),
      })
    })


  return (
    <>
      <form className="max-w-[95%] sm:max-w-[80%] mx-auto mt-10" onSubmit={formik.handleSubmit}>
        <Input
          label={"E-mail"}
          name={"email"}
          placeholder={"email"}
          type={"email"}
          value={formik.values.email}
          handleChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          label={"Password"}
          name={"password"}
          placeholder={"password"}
          type={"password"}
          value={formik.values.password}
          handleChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button
          text={"Login"}
          type={"submit"}
        />
      </form>
    </>
  )
}

export default Login