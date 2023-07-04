const express = require('express')
const cors = require('cors')
const fs = require('fs').promises
const path = require('path')

const app = express()
app.use(cors())

const BASE_PATH = './tracks' // Base directory path

const mentalStates = ['focus', 'relax', 'sleep']

app.use('/tracks', express.static(path.join(__dirname, BASE_PATH)))

// Reads all mp3 files from a given directory
async function getTracksFromDirectory(directory) {
  try {
    const files = await fs.readdir(directory)
    return files.filter((file) => path.extname(file) === '.mp3')
  } catch (err) {
    console.error(`Error reading directory ${directory}:`, err)
    return []
  }
}

// Fetch tracks for a mental state
app.get('/tracks/:state', async (req, res) => {
  const state = req.params.state

  if (!mentalStates.includes(state)) {
    return res.status(404).send({
      error: 'Invalid mental state. Valid options are focus, relax, sleep.',
    })
  }

  const directory = path.join(BASE_PATH, state)
  const tracks = await getTracksFromDirectory(directory)

  if (tracks.length === 0) {
    return res.status(404).send({
      error: `No tracks found for mental state: ${state}`,
    })
  }

  // Construct track objects for each track
  const trackObjects = tracks.map((track) => ({
    songName: track,
    mentalState: state,
    url: `http://${req.headers.host}/tracks/${state}/${track}`,
  }))

  res.send(trackObjects)
})

// Fetch all mental states and total number of songs in each
app.get('/states', async (req, res) => {
  const stateObjects = []

  for (const state of mentalStates) {
    const directory = path.join(BASE_PATH, state)
    const tracks = await getTracksFromDirectory(directory)
    stateObjects.push({
      state,
      totalSongs: tracks.length,
    })
  }

  res.send(stateObjects)
})

// Start server
const PORT = process.env.PORT || 3200
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
