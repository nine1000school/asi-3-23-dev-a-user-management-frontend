import AppContext from "@/components/AppContext.jsx"
import Link from "@/components/Link.jsx"
import routes from "@/routes.js"
import clsx from "clsx"
import Head from "next/head.js"
import { useRouter } from "next/router.js"
import { useContext } from "react"

const NavLink = (props) => {
  const { className, ...otherProps } = props
  const { asPath } = useRouter()

  return (
    <Link
      {...otherProps}
      className={clsx(
        {
          underline: props.href === asPath,
        },
        className
      )}
    />
  )
}

const Page = (props) => {
  const { title, children, className } = props
  const {
    state: { session },
  } = useContext(AppContext)

  return (
    <main className="flex flex-col">
      <Head>
        <title>{`${title ?? "User Management"} | User Management`}</title>
      </Head>
      <header className="flex p-4 border-b sticky items-center justify-between">
        <h1 className="font-bold text-2xl">User Management</h1>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <NavLink href={routes.home}>Home</NavLink>
            </li>
            {session ? (
              <>
                <li>
                  <NavLink href={routes.users.create}>Create</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink href={routes.sign.up}>Sign up</NavLink>
                </li>
                <li>
                  <NavLink href={routes.sign.in}>Sign in</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <section className={clsx("flex flex-col", className)}>{children}</section>
    </main>
  )
}

export default Page
