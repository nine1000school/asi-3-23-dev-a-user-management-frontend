import clsx from "clsx"

const variants = {
  primary: "bg-blue-200 text-blue-600 border-2 border-blue-600",
  danger: "bg-red-200 text-red-600 border-2 border-red-600",
}

const Alert = (props) => {
  const {
    as: Component = "div",
    variant = "primary",
    className,
    ...otherProps
  } = props

  return (
    <Component
      className={clsx("p-4", variants[variant], className)}
      {...otherProps}
    />
  )
}

export default Alert
