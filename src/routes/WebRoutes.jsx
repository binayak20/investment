import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import Home from '../pages/Home'
import PrivacyPolicy from '../pages/PrivacyPolicy'

const WebRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/login'} element={<Login />} />
        <Route exact path={'/sign-up'} element={<SignUp />} />
        <Route exact path={'/privacy-policy'} element={<PrivacyPolicy />} />
      </Routes>
    </>
  )
}

export default WebRoutes