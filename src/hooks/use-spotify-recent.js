import { useStaticQuery, graphql } from "gatsby"

const Spotify = () => {
  const result = useStaticQuery(graphql`
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
              artists {
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
  console.log(result.allSpotifyRecentTrack.edges[0])
  const data = result.allSpotifyRecentTrack.edges[0].node

  return {
    track: data.track.name,
    preview: data.track.preview_url,
    album: data.track.album.name,
    image: data.track.image.localFile.childImageSharp.fluid,
    artist: data.track.artists[0].name
  }
}

export default Spotify
