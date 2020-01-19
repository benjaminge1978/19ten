import React from 'react'
import Nav from './navigation/Nav'
import "./layout.css"

export const Layout = ({children}) => {
    return (
        <div className="d-grid">
            <Nav className="left-col-nav"/>
            <div className="right-col-info">
            {children}
            </div>
        </div>
    )
}

export default Layout
