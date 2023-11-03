
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'

function App() {


  return (
    <>
      <section>
        <div className='fixed w-full z-50'>
          <NavBar></NavBar>
        </div>
        <div className='pt-11'>
          <Outlet></Outlet>
        </div>
        <div className=' mt-10'>
          <Footer></Footer>
        </div>
      </section>
    </>
  )
}

export default App
