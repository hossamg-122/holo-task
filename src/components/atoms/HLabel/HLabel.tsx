import { ComponentPropsWithoutRef } from 'react'

import styles from './HLabel.module.scss'

export interface FieldLabelProps
  extends Omit<ComponentPropsWithoutRef<'label'>, 'className' | 'disabled' | 'htmlFor'> {
  /**
   * Defines whether the Input is disabled (true) or enabled (false).
   *
   * @type {boolean}
   */
  disabled?: boolean

  /**
   * Defines the relation between the Input and label by passing the input id.
   *
   * @type {string}
   */
  htmlFor?: string
}

/**
 * A component to render the 'label' for the input component
 *
 * **Resources:**
 *
 * [MDN: The label Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 */

export const HLabel = ({ disabled, htmlFor, ...props }: FieldLabelProps) => {
  return (
    <label htmlFor={htmlFor} className={styles.HLabel} data-ui-disabled={!!disabled} {...props} />
  )
}
