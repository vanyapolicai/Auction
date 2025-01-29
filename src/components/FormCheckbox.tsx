import { useFormField } from "../hooks/useFormField"

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export function FormCheckbox({ name, label, ...props }: FormCheckboxProps) {
  const { value, onChange, onBlur } = useFormField<boolean>(name)

  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        {...props}
        name={name}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className="form-checkbox text-blue-600"
      />
      <span>{label}</span>
    </label>
  )
}

