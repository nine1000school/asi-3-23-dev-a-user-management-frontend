import Button from "@/components/ui/Button.jsx"
import { useFormikContext } from "formik"

const SubmitButton = (props) => {
  const { isSubmitting, isValid } = useFormikContext()

  return <Button type="submit" disabled={isSubmitting || !isValid} {...props} />
}

export default SubmitButton
