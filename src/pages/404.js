import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'

const NotFound = () => {
    return (
<Layout>
    <Head title="404 Not Found"/>
    <h1>Page not Found</h1>
    <p><Link to="/">Head Home</Link></p>
</Layout>
    )
}

export default NotFound