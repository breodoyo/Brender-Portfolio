import type { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

/** Chrome shared by every page: skip link, navigation, main landmark, footer. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">{children}</main>

      <Footer />
    </>
  )
}
