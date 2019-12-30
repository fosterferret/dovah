import { useStaticQuery, graphql } from "gatsby"

const useHero = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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

export default useHero
