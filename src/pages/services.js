import React from 'react'

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ServicesPage = () => {
    return (
        <Layout>
        <SEO title="services page" />
        <h1>Services Page</h1>
        <p>lorem ipsum</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
}
export default ServicesPage;