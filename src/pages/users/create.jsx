import apiRoutes from "@/apiRoutes.js"
import UserForm from "@/components/business/UserForm.jsx"
import Page from "@/components/Page.jsx"
import axios from "axios"
import { useCallback } from "react"

const CreateUserPage = () => {
  const handleSubmit = useCallback(
    async ({ firstName, lastName, email, birthDate }, { resetForm }) => {
      const { data } = await axios.post(apiRoutes.users.create(), {
        firstName,
        lastName,
        email,
        birthDate,
      })

      resetForm()
    },
    []
  )

  return (
    <Page>
      <UserForm onSubmit={handleSubmit} />
    </Page>
  )
}

export default CreateUserPage
