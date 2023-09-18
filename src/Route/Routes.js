import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TodoList from '../component/TodoList'
import Login from '../component/Login'
import Signup from '../component/Signup'

function Routers() {
    return (
        <>
        <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="*" element="Page Not Found" /> 
    </Routes>
        </>
    )
}

export default Routers
