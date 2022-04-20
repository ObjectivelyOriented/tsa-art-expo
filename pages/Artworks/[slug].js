import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from "../../components/Layout"
import ArtworkStyle from "../../styles/Artwork.module.scss"
import Image from 'next/image'

function ArtworkTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data

  return (
    <>
    <Layout>
    <div className = {ArtworkStyle.text}>
    <div className = {ArtworkStyle.title}>
    <h1>{frontmatter.title}</h1>
      </div>

      
<div  className = {ArtworkStyle.Images2}>
    <Image className = {ArtworkStyle.Images2}
      src={frontmatter.image}
      alt="Picture of the artwork"
      width='1000px'
      height='1000px'
      border-radius='3%'
    
    />
  </div>
    <br/>
      <div className = {ArtworkStyle.content}>
       <ReactMarkdown  children={content} />
      </div>
     
    </div>
    </Layout>
      

    </>
  )
}

ArtworkTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`)
  
  // Parse .md data through `matter`
  const data = matter(content.default)
  
  // Pass data to our component props
  return { ...data }

  return { slug }
}

export default ArtworkTemplate;