
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LayoutOne from './Layout/LayoutOne'
import Buy from './Pages/Buy'
import Card from './Pages/Card'
import app from './firebase.config'
import { ToastContainer } from 'react-toastify'




function App() {


  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/card' element={<Card/>}/>
        </Route>
      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={shanto}/>
    <ToastContainer />
     
    </>
  )
}

export default App
