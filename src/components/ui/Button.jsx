import clsx from "clsx"

const variants = {
  primary: "bg-primary active:bg-primary-dark disabled:bg-neutral text-white",
}

const Button = (props) => {
  const { variant = "primary", ...otherProps } = props

  return (
    <button
      className={clsx("px-3 py-1.5", variants[variant])}
      {...otherProps}
    />
  )
}

export default Button
