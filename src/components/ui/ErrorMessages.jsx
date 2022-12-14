import Alert from "@/components/ui/Alert.jsx"
import clsx from "clsx"

const ErrorMessages = (props) => {
  const { errors, className, children, ...otherProps } = props

  return (
    <Alert
      variant="danger"
      className={clsx("flex flex-col gap-2", className)}
      {...otherProps}
    >
      {(Array.isArray(errors) ? errors : [errors]).map((error) => (
        <p key={error}>- {error}</p>
      ))}
      {children}
    </Alert>
  )
}

export default ErrorMessages
