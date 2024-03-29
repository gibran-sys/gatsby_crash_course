import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import Menu from '../components/menu'
import SEO from "../components/seo"

export default function Template({data}){
    const post = data.markdownRemark

    return(
        <Layout>
            <Menu />
<div>
<Link to ="/blog">Go Back</Link>
<hr />
<h1>{post.frontmatter.title}</h1>
<h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
<div dangerouslySetInnerHTML={{ __html: post.html }} />



</div>
</Layout>

    )
}


export const PostQuery = graphql `
query BlogPostByPath($path: String!){

    markdownRemark(frontmatter: { path: { eq: $path}}){
        html
        frontmatter {
            path
            title
            author
            date
        }

    }
}

`