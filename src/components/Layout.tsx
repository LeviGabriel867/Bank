import {Footer} from '../components/Footer'
import {Header} from './Header/Header'

export const Layout = ({ children}: any) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
