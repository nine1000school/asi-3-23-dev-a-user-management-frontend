import { AppContextProvider } from "@/components/AppContext.jsx"
import "@/globals.css"

const App = ({ Component, pageProps, router }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} router={router} />
    </AppContextProvider>
  )
}

export default App
