
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Component/NavBar'

function App() {


  return (
    <>
      <section>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default App
