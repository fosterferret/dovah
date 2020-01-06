import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              live
              image {
                childImageSharp {
                  fluid(
                    maxWidth: 900
                    quality: 90
                    traceSVG: { color: "#0C1F2C" }
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)
  const result = []

  console.log(data.allMarkdownRemark.edges)
  data.allMarkdownRemark.edges.forEach(edge =>
    result.push({
      ...edge.node.frontmatter,
      image: edge.node.frontmatter.image.childImageSharp.fluid ? edge.node.frontmatter.image.childImageSharp.fluid : null,
      html: edge.node.html,
    })
  )
  return result
}

export default Projects
