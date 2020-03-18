import React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
        <h1>Hello</h1>
            <h2>I'm Justin Garcia. A Web Developer.</h2>
            <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
        </Layout>
    )
}

export default IndexPage