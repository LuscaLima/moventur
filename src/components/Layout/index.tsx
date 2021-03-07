import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Style
import style from './style.module.scss'

// Icons
import { FaHome, FaMedal } from 'react-icons/fa'

// Props definition
type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  // Define if a link is active or not
  function isLinkActive(href: string) {
    return router.pathname === href ? style.active : ''
  }

  return (
    <main className={style.layout}>
      <div className={style.navbar}>
        <header className={style.brand}></header>
        <div className={style.menu}>
          <ul>
            <Link href="/">
              <li className={`${style['home']} ${isLinkActive('/')}`}>
                <FaHome />
              </li>
            </Link>
            <Link href="/ranking">
              <li className={`${style['ranking']} ${isLinkActive('/ranking')}`}>
                <FaMedal />
              </li>
            </Link>
          </ul>
        </div>
        <footer className={style.corner}></footer>
      </div>
      <div className={style.content}>{children}</div>
    </main>
  )
}
