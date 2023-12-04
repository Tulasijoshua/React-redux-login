import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import RequireAuth from './features/auth/RequireAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={Layout}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          
          <Route element={<RequireAuth />}>
            <Route path="welcome" />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
