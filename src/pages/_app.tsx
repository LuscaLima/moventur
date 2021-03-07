import { ReactNode } from 'react'

// Style
import '../style/global.scss'

// Props definition
type EmptyLayoutProps = {
  children: ReactNode
}

// Layouts
function EmptyLayout({ children }: EmptyLayoutProps) {
  return <>{children}</>
}

function Mooven({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Mooven
