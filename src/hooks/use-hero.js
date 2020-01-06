import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query  {
      allMarkdownRemark (filter: { fileAbsolutePath: { regex: "/hero/" } }) {
        edges {
          node {
            frontmatter {
              cta
              el1
              el2
              name
              title
            }
            html
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges[0].node
}

export default Hero
