import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
        fields:	publishedDate,
          order: DESC
        }
      ){
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
    `)
    console.log(data)
    return (
        <Layout>
          <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map( edge => {
                  const { title, slug, publishedDate } = edge.node
                  return (
                  <li key={slug} className={blogStyles.post}>
                    <Link to={`/blog/${slug}`}>
                      <h2>{title}</h2>
                      <p>{publishedDate}</p>
                      </Link>
                      </li>
                  )
                })}
            </ol>
            </Layout>
    )
}

export default BlogPage