import React from 'react'

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'


const AboutPage = () => 
     (
        <Layout>
        <SEO title="about page" />
        <Menu />
        <h1>About Us</h1>
        <p>lorem ipsum</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )

export default AboutPage;