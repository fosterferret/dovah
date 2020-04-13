import React, { useState, useEffect } from "react"
import useSpotify from "../hooks/use-spotify-recent"
import styled from "styled-components"
import Img from "gatsby-image"
import theme from "../styles/theme"
import media from "../styles/media"

const StyledImg = styled(Img)`
  n-height: 48px;
  min-width: 48px;
  max-width: 48px;
  max-height: 48px;
  width: 100%;
  height: 100%;
  background-color: rgb(44, 44, 44);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  object-fit: contain;
  position: relative;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  position: fixed;
  right: -50px;
  padding: 0.3rem;
  p:nth-of-type(1) {
    font-size: 12px;
    font-weight: bold;
    color: ${theme.colors.titleWhite};
  }
  p:nth-of-type(2) {
    font-size: 12px;
    font-weight: bold;
    color: ${theme.colors.lightGrey};
  }
  .top {
    display: flex;
  }
  ${media.tablet`
    display: none;
`}
`

const StyledSongDetails = styled.div`
  line-height: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 0.4rem;
`

const StyledSong = styled.div`
  display: flex;
`

const LastPlayed = () => {
  const recentTracks = useSpotify()
  const url = recentTracks.preview
  // eslint-disable-next-line no-unused-vars
  const [play, handlePlay] = useAudio(url)

  return (
    <StyledContainer onClick={handlePlay ? handlePlay : null}>
      <div className="top">
        <p>Last Played.</p>
      </div>
      <StyledSong>
        <StyledImg fluid={recentTracks.image} />
        <StyledSongDetails>
          <p>{recentTracks.track}</p>
          <p>{recentTracks.artist}</p>

          {/* <div className="play">
        {play ?
          <svg
            className="controls__play"
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="grey"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.0195312 0.269531L13.7305 9L0.0195312 17.7305V0.269531Z" />
          </svg>
          : null
          }
        </div> */}
        </StyledSongDetails>
      </StyledSong>
    </StyledContainer>
  )
}

const useAudio = url => {
  const bypassAudioObjectProblemInBuild = a => {
    if (typeof window !== "undefined" && window) {
      if (window.Audio) {
        return new Audio(a)
      } else return null
    }
    return null
  }

  let audioFile = bypassAudioObjectProblemInBuild(url)

  const [audio] = useState(audioFile)
  const [play, setPlay] = useState(false)

  const handlePlay = () => setPlay(!play)

  useEffect(() => {
    if (audio) {
      play ? audio.play() : audio.pause()
    }
    return
  }, [play])

  useEffect(() => {
    if (audio !== null) {
      audio.addEventListener("ended", () => setPlay(false))
      return () => {
        audio.removeEventListener("ended", () => setPlay(false))
      }
    }
    return
  }, [])

  return [play, handlePlay]
}

export default LastPlayed
