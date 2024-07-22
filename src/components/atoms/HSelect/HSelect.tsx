import { HTMLAttributes } from 'react'
import { HLabel } from '../HLabel'
import styles from './HSelect.module.scss'

export interface SelectOption {
  /**
   *  Required label displayed for the Select option.
   *
   * @type label: string;
   */
  label: string
  /**
   *  Required value for the Select option.
   *
   * @type value: string;
   */
  value: string
  /**
   *  Optional flag set if the Select option should be disabled.
   *
   * @type disabled?: boolean;
   */
  disabled?: boolean
  /**
   * Optional aria-label for the Select option.
   *
   * @type ariaLabel?: string;
   */
  ariaLabel?: string
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  /**
   *  Optional label text displayed for the Select.
   *
   * @type labelText: string;
   */
  label?: string

  /**
   * array of available options
   *
   * @type options: SelectOption[];
   */
  options: SelectOption[]

  /** the currently selected value
   *
   * @type value: string;
   */
  value?: string

  /**
   *  optional placeholder text
   *
   * @type placeholderText?: string;
   */
  placeholder?: string

  /**
   * optional flag set if component should be disabled
   *
   * @type disabled?: boolean;
   */
  disabled?: boolean

  /**
   * optional aria-label
   *
   * @type ariaLabel?: string;
   */
  ariaLabel?: string

  /**
   * optional error style that will be applied to the Select component
   *
   * @type hasError?: boolean;
   */
  hasError?: boolean

  /**
   * An optional string value that is used for setting 'data-test' prop at outermost container of Select.
   *
   * @type {string}
   */
  dataTest?: string
}

/**
 * A component to render the 'Single Select Menu'.
 *
 * **Accessibility:**
 *
 * The 'ariaLabel' prop of the Select component and of each of the `SelectOption` elements should be provided with the appropriately localized text. These texts will be read out to the users of assistive technology so that they can make their correct selection of the Select options.
 *
 * **Practices:**
 *
 * The Select is a controlled component; the consuming app should control which value is currently selected, via the `value` prop, each time the provided `onChange` callback prop is called with the `value` of the end user selected `SelectOption`.
 *
 * **Resources:**
 *
 * [MDN: select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 *
 * [MDN: aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
 */

export const HSelect = ({
  label,
  id,
  disabled,
  value,
  onChange,
  placeholder,
  options,
  ariaLabel,
  hasError,
  ...props
}: SelectProps) => {
  return (
    <div>
      {!!label && (
        <HLabel htmlFor={id} disabled={disabled}>
          {label}
        </HLabel>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-label={ariaLabel}
        className={styles.HSelect}
        data-error={hasError}
        {...props}
      >
        {!!placeholder && <option>{placeholder}</option>}
        {options.map(({ label, value, disabled, ariaLabel }, i) => (
          <option
            value={value}
            disabled={disabled}
            aria-label={ariaLabel || label}
            key={`select-option-${label}-${i}`}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
