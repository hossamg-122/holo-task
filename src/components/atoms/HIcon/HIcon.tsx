import { SVGProps } from 'react'
import { paths } from '@/hIcons'

/**
 * Props interface for the HIcon component.
 *
 * @interface Props
 * @extends {SVGProps<SVGSVGElement>}
 */
interface Props extends SVGProps<SVGSVGElement> {
  /**
   * The name of the icon to be used. It should match a key in the paths object.
   *
   * @type {keyof typeof paths}
   */
  name: keyof typeof paths
  /**
   * The size of the icon. Defaults to 24 if not provided.
   *
   * @type {?number}
   */
  size?: number
  /**
   * Optional test ID for the component, useful for testing.
   */
  dataTest?: string
}

/**
 * HIcon component that renders an SVG icon based on the provided name.
 *
 * @param {Props} props - The props for the Icon component.
 * @param {keyof typeof paths} props.name - The name of the icon to be rendered.
 * @param {number} [props.size=24] - The size of the icon.
 * @param {SVGProps<SVGSVGElement>} props...props - Additional SVG props.
 * @returns {JSX.Element | null} The SVG element representing the icon, or null if the icon name is invalid.
 */

export const HIcon = ({ name, size = 24, viewBox, dataTest, ...props }: Props) => {
  if (!paths[name]) {
    console.warn(`The icon name doesn't exist in our library`)

    return null
  }

  const iconPath = paths[name]
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox={viewBox || `0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      data-test={dataTest}
    >
      <path d={iconPath} fill="currentColor" />
    </svg>
  )
}
