import React from 'react'
import Layout from '../compontents/Layout'
import Company from '../compontents/company/Company'
import About from "../compontents/about/About"


export const index = () => {
    return (
        <Layout>
            <About />
            <Company />
            <img src="../images/codex-header.jpg" alt=""/>
        </Layout>
    )
}

export default index