import Link from "@/components/Link.jsx"
import routes from "@/routes.js"
import clsx from "clsx"
import Head from "next/head.js"
import { useRouter } from "next/router.js"

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
  const { title = "User Management", children, className } = props

  return (
    <main className="flex flex-col">
      <Head>
        <title>{title} | User Management</title>
      </Head>
      <header className="flex p-4 border-b sticky items-center justify-between">
        <h1 className="font-bold text-2xl">User Management</h1>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <NavLink href={routes.home}>Home</NavLink>
            </li>
            <li>
              <NavLink href={routes.users.create}>Create</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className={clsx("flex flex-col", className)}>{children}</section>
    </main>
  )
}

export default Page
