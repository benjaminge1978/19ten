import React from 'react'
import Layout from '../compontents/Layout'
import Nav from '../compontents/navigation/Nav'
import Company from '../compontents/company/Company'

export const index = () => {
    return (
        <Layout>
            <Nav />
            <Company />
            Testing the layout
        </Layout>
    )
}

export default index