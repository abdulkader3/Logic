
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LayoutOne from './Layout/LayoutOne'
import Buy from './Pages/Buy'



function App() {


  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/buy' element={<Buy/>}/>
        </Route>
      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={shanto}/>
     
    </>
  )
}

export default App
