import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { UserContextProvider } from '../context/useContext'


export const MainLayout = () => {
  return (
    <>
    <NavBar />
    <UserContextProvider>
    <Outlet/> 
    </UserContextProvider>
    <Footer/>
    </>
  )
}
