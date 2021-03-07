import { Children, ReactNode } from 'react'

// Style
import style from './style.module.scss'

// Props definition
type ButtonProps = {
  children: ReactNode
  icon?: string
  theme?: string
  size?: string
  block?: boolean
  onClick?: () => void
}

export default function MButton({
  children,
  icon,
  block,
  ...rest
}: ButtonProps) {
  function theme() {
    const { theme, size } = rest
    let themeDefinition = ''
    const buttonStyle = style

    const styles = [theme, size]
    styles.forEach(style => {
      themeDefinition += '' || ' ' + buttonStyle[style]
    })

    return themeDefinition
  }

  return (
    <button
      type="button"
      className={`${style.mButton} ${theme()} ${block ? style['block'] : ''}`}
      {...rest}
    >
      {icon && (
        <img
          className={style.icon}
          src={`icons/${icon}`}
          alt="Íconde do botão"
        />
      )}
      {children}
    </button>
  )
}
