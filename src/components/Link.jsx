import clsx from "clsx"
import NextLink from "next/link"

const Link = (props) => {
  const { className, href, ...otherProps } = props

  const realHref = typeof href === "function" ? href() : href

  return (
    <NextLink
      {...otherProps}
      href={realHref}
      className={clsx("hover:underline", className)}
    />
  )
}

export default Link
