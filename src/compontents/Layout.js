import React from 'react'
import Nav from './navigation/Nav'
import "./layout.css"
import Footer from '../compontents/footer/Footer'

export const Layout = ({children}) => {
    return (
        <div className="wrapper">
        <div className="d-grid">
            <Nav className="left-col-nav"/>
            <div className="right-col-info">
            {children}
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Layout
