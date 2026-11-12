import type { ReactNode } from 'react'

type ContainerSize = 'default' | 'narrow' | 'wide'

interface ContainerProps {
  children: ReactNode
  size?: ContainerSize
  className?: string
}

const SIZE_CLASSES: Record<ContainerSize, string> = {
  default: 'container-page',
  narrow: 'container-narrow',
  wide: 'mx-auto w-full max-w-[84rem] px-5 sm:px-7 lg:px-10',
}

export function Container({
  children,
  size = 'default',
  className = '',
}: ContainerProps) {
  return (
    <div className={`${SIZE_CLASSES[size]} ${className}`.trim()}>
      {children}
    </div>
  )
}
