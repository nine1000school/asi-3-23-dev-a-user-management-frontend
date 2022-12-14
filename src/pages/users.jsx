import apiRoutes from "@/apiRoutes.js"
import UserList from "@/components/business/UserList.jsx"
import Page from "@/components/Page.jsx"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const deleteUser = useCallback(async (userId) => {
    await axios.delete(apiRoutes.users.delete(userId))

    setUsers((users) => users.filter(({ id }) => id !== userId))
  }, [])

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await axios(apiRoutes.users.read.collection())

      setUsers(Object.values(result))
    })()
  })

  return (
    <Page title="List of all users">
      <UserList users={users} deleteUser={deleteUser} />
    </Page>
  )
}

export default UsersPage
