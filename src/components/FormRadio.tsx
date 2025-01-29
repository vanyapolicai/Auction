import { useFormField } from "../hooks/useFormField"

interface FormRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export function FormRadio({ name, label, ...props }: FormRadioProps) {
  const { value, onChange, onBlur } = useFormField(name)

  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        {...props}
        name={name}
        checked={value === props.value}
        onChange={onChange}
        onBlur={onBlur}
        className="form-radio text-blue-600"
      />
      <span>{label}</span>
    </label>
  )
}

