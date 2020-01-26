import { useStaticQuery, graphql } from "gatsby"

const Spotify = () => {
  const data = useStaticQuery(graphql`
    query {
      allSpotifyRecentTrack(sort: { fields: played_at, order: DESC }) {
        edges {
          node {
            track {
              name
              preview_url
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              album {
                name
              }
            }
            played_at
          }
        }
      }
    }
  `)
//   const result = []

//   console.log(data.allMarkdownRemark.edges)
//   data.allMarkdownRemark.edges.forEach(edge =>
//     result.push({
//       ...edge.node.frontmatter,
//       image: edge.node.frontmatter.image.childImageSharp.fluid
//         ? edge.node.frontmatter.image.childImageSharp.fluid
//         : null,
//       html: edge.node.html,
//     })
//   )
  return data
}

export default Spotify
