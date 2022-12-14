import apiRoutes from "@/apiRoutes.js"
import UserForm from "@/components/business/UserForm.jsx"
import Page from "@/components/Page.jsx"
import ErrorMessages from "@/components/ui/ErrorMessages.jsx"
import { formatUser } from "@/dataFormatters.js"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export const getServerSideProps = (ctx) => {
  return {
    props: {
      params: ctx.params,
    },
  }
}

const EditUserPage = (props) => {
  const {
    params: { userId },
  } = props
  const [error, setError] = useState("")
  const [user, setUser] = useState(null)
  const handleSubmit = useCallback(
    async ({ firstName, lastName, email, birthDate }, { resetForm }) => {
      setError("")

      try {
        const {
          data: { result },
        } = await axios.patch(apiRoutes.users.update(userId), {
          firstName,
          lastName,
          email,
          birthDate,
        })

        setUser(formatUser(result))
      } catch (err) {
        setError(err.response?.data?.error || "Oops, something went wrong.")
      }
    },
    [userId]
  )

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await axios(apiRoutes.users.read.single(userId))

      setUser(formatUser(result))
    })()
  }, [userId])

  if (!user) {
    return "Loading..."
  }

  return (
    <Page title={`Editing user #${userId}`}>
      {error && (
        <ErrorMessages className="max-w-xl mx-auto my-8" errors={error} />
      )}
      <UserForm onSubmit={handleSubmit} initialValues={user} />
    </Page>
  )
}

export default EditUserPage
