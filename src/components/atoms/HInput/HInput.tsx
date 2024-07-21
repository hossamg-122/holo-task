import { KeyboardEventHandler, InputHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

import styles from './HInput.module.scss'
import { HLabel } from '../HLabel'

export interface HInputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * label to be rendered above the Input component.
   *
   * @type {ReactNode}
   */
  label?: ReactNode

  /**
   * name of the input field.
   *
   * @type {string}
   */
  name?: string
  /**
   * An optional string to be used for the aria-describedby.
   *
   * @type {string}
   */
  ariaDescribedBy?: string

  /**
   * An optional string to be used for the aria-errormessage.
   *
   * @type {string}
   */
  ariaErrorMessage?: string

  /**
   * An optional string to be used for the aria-labelledby.
   *
   * @type {string}
   */
  ariaLabelledBy?: string

  /**
   * Defines whether the Input is disabled (true) or enabled (false).
   *
   * @type {boolean}
   */
  disabled?: boolean

  /**
   * Defines whether the Input is in an error state.
   *
   * @type {boolean}
   */
  error?: boolean

  /**
   * Defines the id of underlying Html input element. Also used for setting aria labels
   * automatically at the Input component if they have not been provided by the using app.
   *
   * @type {string}
   */
  id: string

  /**
   * Defines the text displayed inside the Input.
   *
   * @type {string}
   */
  value: string

  /**
   * Is fired when a key is pressed while the focus is on the Input.
   *
   * @type {KeyboardEventHandler<HTMLInputElement>}
   */
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>

  /**
   * Is fired when a key is released while the focus is on the Input.
   *
   * @type {KeyboardEventHandler<HTMLInputElement>}
   */
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>

  /**
   * An optional field that sets the type the input element should display.
   * Defaults to 'text' if not specified.
   *
   * @type {InputHTMLAttributes<HTMLInputElement>['type']}
   */
  type?: InputHTMLAttributes<HTMLInputElement>['type']

  /**
   * An optional field that sets the keyboard type user will be prompted with while typing.
   * Defaults to 'text' if not specified.
   *
   * @type {InputHTMLAttributes<HTMLInputElement>['inputmode']}
   */
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']

  /**
   * An optional string to be used to set the placeholder for the input
   *
   *
   * @type {string}
   */
  placeholder?: string

  /**
   * An optional string to specify if browsers should try to
   * predict the value of an input field or not.
   *
   * Additionally, you can specify which type of value
   * you expect in the input field.
   *
   * Defaults to "on" if type of value is not specified.
   *
   * @type {HTMLInputElement['autocomplete']}
   */
  autoComplete?: HTMLInputElement['autocomplete']

  /**
   * An optional attribute indicating that an element should be
   * focused on page load.
   *
   * Please keep in mind the accessibility considerations when using autoFocus.
   * In summary, automatically focusing a form control can confuse visually-impaired people using
   * screen-reading technology and people with cognitive impairments.
   *
   * Only use this prop when necessary and avoid altogether if possible!
   *
   * For more reading, please refer to:
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_considerations}
   *
   * @type {boolean}
   */
  autoFocus?: boolean
}

/**
 * A component to render the form 'input' with multiple types with the ability to add 'Label' on top and the 'Helper Text'
 * below
 *
 * **Accessibility:**
 *
 * A unique id should be passed to the Input component, which is used for a11y values. The id shouldn't be an auto generated id.
 *
 * **Practices:**
 *
 * The Input component expands the HTML Input Element.
 *
 * **Resources:**
 *
 * [MDN: The Input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 */
export const HInput = ({
  label,
  ariaDescribedBy,
  ariaErrorMessage,
  ariaLabelledBy,
  disabled = false,
  error = false,
  id,
  type = 'text',
  inputMode = 'text',
  value,
  onChange,
  onBlur,
  onKeyDown,
  onKeyUp,
  placeholder = '',
  name,
  autoComplete,
  autoFocus,
  ...props
}: HInputProps) => {
  return (
    <div>
      {!!label && (
        <HLabel disabled={disabled} htmlFor={id}>
          {label}
        </HLabel>
      )}
      <div data-ui-disabled={disabled} data-ui-error={error} className={styles.HInputWrapper}>
        <input
          type={type}
          inputMode={inputMode}
          id={id}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          aria-labelledby={ariaLabelledBy}
          aria-disabled={disabled}
          aria-invalid={error}
          aria-live="polite"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          className={styles.HInput}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          {...props}
        />
      </div>
    </div>
  )
}
