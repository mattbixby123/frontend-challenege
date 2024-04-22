import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = true, disabled, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null); //Specify the type for useRef

  const handleChange = () => {
    const currentValue = inputRef.current?.checked || false; //ensure null safety
    onChange(!currentValue);
  }

  return (
    <div className="RampInputCheckbox--container">
      <label
        htmlFor={id.toString()} // Convert id to string explicitly
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={id.toString()} // Convert id to string explicitly
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  )
}