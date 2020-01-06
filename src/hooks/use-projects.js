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
                    maxWidth: 1050
                    quality: 100
                    traceSVG: { color: "#EAD87B" }
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
      image: edge.node.frontmatter.image.childImageSharp.fluid,
      html: edge.node.html,
    })
  )
  return result
}

export default Projects
