import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
query($slug:String!) {
  contentfulBlogPost (slug: {eq:$slug}){
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      json
    }
  }
}
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
  const {publishedDate, title, body} = props.data.contentfulBlogPost
    return (
        <Layout>
          <Head title={title}/>
            <h1>{title}</h1>
    <p>{publishedDate}</p>
    {documentToReactComponents(body.json, options)}
        </Layout>
    )
}

export default Blog