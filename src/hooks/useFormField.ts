import { useField } from "formik"

export function useFormField<T = string>(name: string) {
  const [field, meta, helpers] = useField<T>(name)

  return {
    ...field,
    error: meta.touched && meta.error,
    ...helpers,
  }
}

