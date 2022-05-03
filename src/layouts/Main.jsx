// Importin router-dom
import { Link, Outlet } from "react-router-dom";
// Importing Components
import Header from './../components/Header'
import Footer from './../components/Footer'

const Main = () => {
  return (
    <>
      <Header header={'header--main'}/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Main