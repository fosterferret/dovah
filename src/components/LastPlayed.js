import React, { useState, useEffect } from "react"
import useSpotify from "../hooks/use-spotify-recent"
import styled from "styled-components"
import Img from "gatsby-image"
import theme from "../styles/theme"

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
  width: 100%;
  max-width: 250px;
  position: absolute;
  right: 10px;
  padding: 1rem;
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
  .left {
    display: flex;
    flex-direction: column;
  }
`

const StyledSongDetails = styled.div`
  margin-top: 1.6rem;
  line-height: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const LastPlayed = () => {
  const recentTracks = useSpotify()
  const url = recentTracks.preview
  const [play, handlePlay] = useAudio(url)
  console.log(play)
  return (
    <StyledContainer onClick={handlePlay}>
      <div className="left">
        <p>listening.</p>
        <StyledImg fluid={recentTracks.image} />
      </div>
      <StyledSongDetails>
        <p>{recentTracks.track}</p>
        <p>{recentTracks.artist}</p>
      </StyledSongDetails>
    </StyledContainer>
  )
}

const useAudio = url => {
  const [audio] = useState(new Audio(url))
  const [play, setPlay] = useState(false)

  const handlePlay = () => setPlay(!play)

  useEffect(() => {
    play ? audio.play() : audio.pause()
  }, [play])

  useEffect(() => {
    audio.addEventListener("ended", () => setPlay(false))
    return () => {
      audio.removeEventListener("ended", () => setPlay(false))
    }
  }, [])

  return [play, handlePlay]
}

export default LastPlayed
