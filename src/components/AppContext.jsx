import Loader from "@/components/ui/Loader.jsx"
import api from "@/services/api.js"
import { createContext, useCallback, useEffect, useState } from "react"

const SESSION_LOADING = Symbol("session is loading")

const initialState = {
  session: SESSION_LOADING,
}

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const setSession = useCallback((jwt) => {
    if (!jwt) {
      localStorage.deleteItem("app_session")
      setState((state) => ({
        ...state,
        session: null,
      }))

      return
    }

    localStorage.setItem("app_session", jwt)
    setState((state) => ({
      ...state,
      session: JSON.parse(atob(jwt.split(".")[1])),
    }))
  }, [])
  const signIn = useCallback(
    async (email, password) => {
      const {
        data: { result: jwt },
      } = await api.post("/sign-in", { email, password })

      setSession(jwt)
    },
    [setSession]
  )

  useEffect(() => {
    const jwt = localStorage.getItem("app_session")

    if (!jwt) {
      return
    }

    setSession(jwt)
  }, [setSession])

  if (state.session === SESSION_LOADING) {
    return (
      <div className="fixed inset-0 bg-white z-1000 flex items-center justify-center h-screen w-screen">
        <Loader />
      </div>
    )
  }

  return <AppContext.Provider {...props} value={{ state, signIn }} />
}

const AppContext = createContext()

export default AppContext
