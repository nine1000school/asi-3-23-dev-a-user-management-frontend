import Form from "@/components/ui/Form.jsx"
import FormField from "@/components/ui/FormField.jsx"
import SubmitButton from "@/components/ui/SubmitButton.jsx"
import { Formik } from "formik"
import * as yup from "yup"

const validationSchema = yup.object().shape({
  firstName: yup.string().min(1).required().label("First name"),
  lastName: yup.string().min(1).required().label("Last name"),
  email: yup.string().min(1).required().label("E-mail"),
  birthDate: yup.string().min(1).required().label("Birth date"),
})

const defaultInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  birthDate: "",
}

const UserForm = (props) => {
  const {
    className,
    initialValues = defaultInitialValues,
    ...otherProps
  } = props

  return (
    <Formik
      {...otherProps}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <Form className={className}>
        <FormField name="firstName" label="First name" />
        <FormField name="lastName" label="Last name" />
        <FormField name="email" label="E-mail" />
        <FormField name="birthDate" type="date" label="Birth date" />
        <SubmitButton>SUBMIT</SubmitButton>
      </Form>
    </Formik>
  )
}

export default UserForm
