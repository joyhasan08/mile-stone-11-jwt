
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Component/NavBar'

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
      </section>
    </>
  )
}

export default App
