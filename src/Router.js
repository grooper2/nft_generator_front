import React from 'react'
import { Router } from '@reach/router'
import LandingPage from './pages/publickPages/LandingPage'
import LoginPage from './pages/publickPages/LoginPage'
import RegisterPage from './pages/publickPages/RegisterPage'
import ProjectPage from './pages/users/ProjectPage'
import CurrentProjectPage from './pages/users/CurrentProjectPage'

const UserCore = () => {
    return(
        <></>
    )
}

const PublicRouter = () => {
    return(
        <Router>
            <LoginPage path="/login" />
            <RegisterPage path="/register" />
            <ProjectPage path="/projects" />
            <CurrentProjectPage path="/current_project" />
            <LandingPage default path="/" />
        </Router>
    )
}

export const MasterRouter = () => {
    const isLoggedIn = false

    return(
        <>
            {isLoggedIn ? <UserCore /> : <PublicRouter/> }
        </>
    )
}