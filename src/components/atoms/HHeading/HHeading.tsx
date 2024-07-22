import { HTMLProps } from 'react'
import styles from './HHeading.module.scss'

export interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  /**
   * The DOM HeadingElement to be rendered. When not specified, the given
   * `level` will be used to determine which HeadingElement will be rendered.
   *
   * @type {('h1' | 'h2' | 'h3' | 'h5' | 'h6')}
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * The document heading level at which this heading will be visually
   * perceived. This level will determine which HeadingElement is rendered when
   * not otherwise specified through the `as` prop.
   *
   * @type {(1 | 2 | 3 | 4 | 5 | 6)}
   */
  level: 1 | 2 | 3 | 4 | 5 | 6

  /**
   * An optional string value that is used for setting 'data-test' prop at the Heading component.
   *
   * @type {string}
   */
  dataTest?: string
}

/**
 * A component to render page headings for any level 1 through 6.
 *
 * **Accessibility:**
 *
 * The structure of a document is primarily determined by its headings. Users of assistive technology often rely on headings for navigation.
 * For this reason, it is important to ensure that every document uses headings appropriately.
 *
 * **Practices:**
 *
 * Use **ONLY ONE** level 1 heading on a page.
 * Visual appearance of a heading is only a suggestion of its importance and is not concretely linked to its semantic importance.
 * For example,a heading which semantically appears after another can be given more prominence to catch a user's attention earlier.
 * This is achieved by setting the `level` prop to the intended visual level or by setting the `as` prop to the semantic heading element
 * that should be rendered. However, this practice should be avoided to reduce user confusion.
 *
 * **When to Use:**
 *
 * Use the Heading component when a section of content should be identified by brief, titular content.
 *
 * **When Not to Use:**
 *
 * Do NOT use the Heading component when you want non-heading content to be visually similar to a heading.
 *
 * **Resources:**
 *
 * [MDN: Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
 *
 * [web.dev: Headings and Landmarks](https://web.dev/headings-and-landmarks/)
 */
export const HHeading = ({ as: As, children, level, dataTest, ...props }: HeadingProps) => {
  const Component = As || `h${level}`

  return (
    <Component
      className={`${styles.HHeading} ${styles[`Level${level}`]}`}
      aria-live="polite"
      data-test={dataTest}
      {...props}
    >
      {children}
    </Component>
  )
}
