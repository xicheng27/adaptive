declare module 'react-simple-maps' {
  import { ComponentType, ReactNode, SVGProps } from 'react'

  interface ComposableMapProps {
    projectionConfig?: Record<string, unknown>
    style?: React.CSSProperties
    children?: ReactNode
  }
  export const ComposableMap: ComponentType<ComposableMapProps>

  interface GeographiesProps {
    geography: string
    children: (args: { geographies: Geography[] }) => ReactNode
  }
  export const Geographies: ComponentType<GeographiesProps>

  interface Geography {
    rsmKey: string
    id: string
    [key: string]: unknown
  }

  interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: Geography
    style?: { default?: React.CSSProperties; hover?: React.CSSProperties; pressed?: React.CSSProperties }
  }
  export const Geography: ComponentType<GeographyProps>
}
