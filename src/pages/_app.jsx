import "@/globals.css"

const App = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} router={router} />
}

export default App
