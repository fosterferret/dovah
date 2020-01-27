import fetch from "node-fetch"
export const SPOTIFY_ACCOUNT_URL = "https://accounts.spotify.com"
export const SPOTIFY_API_URL = "https://api.spotify.com/v1"
export const REDIRECT_URL = "http://localhost:5071/spotify"

export const generateAuthUrl = (
  clientId,
  scopes = ["user-top-read", "user-read-recently-played"]
) => {
  const base = new URL(`${SPOTIFY_ACCOUNT_URL}/authorize`)
  base.searchParams.append("response_type", "code")
  base.searchParams.append("redirect_uri", REDIRECT_URL)
  base.searchParams.append("client_id", clientId)
  base.searchParams.append("scope", scopes.join(" "))
  return String(base)
}

export const getTokens = async (clientId, clientSecret, code, grantType) => {
  const body = new URLSearchParams()

  body.append("grant_type", grantType)
  body.append("redirect_uri", REDIRECT_URL)
  body.append(grantType === "refresh_token" ? "refresh_token" : "code", code)
  body.append("client_id", clientId)
  body.append("client_secret", clientSecret)

  const response = await fetch(`${SPOTIFY_ACCOUNT_URL}/api/token`, {
    method: "POST",
    body: body,
  })

  if (!response.ok) {
    throw new Error(`${response.statusText}: ${await response.text()}`)
  }

  return await response.json()
}

const getTop = async (
  accessToken,
  type,
  timeRange = "medium_term",
  limit = 20
) => {
  const url = new URL(`${SPOTIFY_API_URL}/me/top/${type}`)
  url.searchParams.append("time_range", timeRange)
  url.searchParams.append("limit", String(Math.min(limit, 50)))

  const response = await fetch(String(url), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(
      `[${url} / ${accessToken}] ${
        response.statusText
      }: ${await response.text()}`
    )
  }

  const result = await response.json()
  return result.items
}

export const getRecentTracks = async (accessToken, limit) => {
  const url = new URL(`${SPOTIFY_API_URL}/me/player/recently-played`)
  url.searchParams.append("limit", String(Math.min(limit, 50)))

  const response = await fetch(String(url), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(`${response.statusText}: ${await response.text()}`)
  }

  const result = await response.json()
  return result.items
}

export const getUserData = async ({
  clientId,
  clientSecret,
  refreshToken,
  timeRanges = ["short_term", "medium_term", "long_term"],
  fetchRecent = true,
}) => {
  const { access_token } = await getTokens(
    clientId,
    clientSecret,
    refreshToken,
    "refresh_token"
  )
  const recentTracks = fetchRecent ? await getRecentTracks(access_token) : []

  const artists = await Promise.all(
    timeRanges.map(async t => {
      const artists = await getTop(access_token, "artists", t)
      return artists.map(artist => ({ ...artist, time_range: t }))
    })
  )

  const tracks = await Promise.all(
    timeRanges.map(async t => {
      const tracks = await getTop(access_token, "tracks", t)
      return tracks.map(track => ({ ...track, time_range: t }))
    })
  )

  return {
    recentTracks,
    artists: [].concat(...artists),
    tracks: [].concat(...tracks),
  }
}
