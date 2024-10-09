import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import App2 from './about/App2.jsx'
import App3 from './Seminar/App3.jsx'
import App4 from './Advice/App4.jsx'
import App5 from './Contact/App5.jsx'
import App6 from './Blog/App6.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
    <Route index path='' element={<App/>} />
    <Route path='about' element={<App2/>} />
    <Route path='seminar' element={<App3/>} />
    <Route path='advice' element={<App4/>} />
    <Route path='contact' element={<App5/>} />
    <Route path='blog' element={<App6/>} />
    

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
