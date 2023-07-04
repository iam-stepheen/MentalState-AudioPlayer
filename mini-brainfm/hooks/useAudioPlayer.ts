import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Audio,
  AVPlaybackStatus,
  InterruptionModeAndroid,
  InterruptionModeIOS,
} from 'expo-av'
import { BASE_URL } from '../contants/constants'

// Type definitions
type SoundFile = {
  mentalState: string
  songName: string
  url: string
}

let soundObject: Audio.Sound
soundObject = new Audio.Sound()

const useAudioPlayer = (mentalState: string) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentSoundIndex, setCurrentSoundIndex] = useState<number>(0)
  const [soundFiles, setSoundFiles] = useState<SoundFile[]>([])
  const [currentPosition, setCurrentPosition] = useState<number | null>(null)
  const [duration, setDuration] = useState<number | null>(null)

  useEffect(() => {
    const fetchSoundFiles = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/tracks/${mentalState.toLowerCase()}`
        )
        if (response.data) {
          setSoundFiles(response.data)
        }
      } catch (error) {
        console.error('Error while fetching sound files', error)
      }
    }

    fetchSoundFiles()
  }, [])

  useEffect(() => {
    if (soundFiles.length > 0) {
      loadAudio()
    }
  }, [soundFiles, currentSoundIndex])

  useEffect(() => {
    return soundObject
      ? () => {
          console.log('Unloading Sound')
          soundObject.unloadAsync()
        }
      : undefined
  }, [soundObject])

  const loadAudio = async () => {
    soundObject.unloadAsync()
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: InterruptionModeIOS.DoNotMix,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
    })

    const source = { uri: soundFiles[currentSoundIndex].url }
    const status = {
      shouldPlay: false,
    }

    soundObject.setOnPlaybackStatusUpdate(updatePlaybackStatus)
    await soundObject.loadAsync(source, status, false)
    const statusResult = await soundObject.getStatusAsync()
    if (statusResult.isLoaded) {
      setDuration(statusResult.durationMillis)
    }
  }

  const updatePlaybackStatus = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setCurrentPosition(status.positionMillis)
      if (status.didJustFinish) {
        nextAudio()
      }
    } else if ('error' in status) {
      console.log(`Encountered a playback error: ${status.error}`)
    }
  }

  const playAudio = async () => {
    setIsPlaying(true)
    await soundObject.playAsync()
  }

  const pauseAudio = async () => {
    setIsPlaying(false)
    await soundObject.pauseAsync()
  }

  const nextAudio = async () => {
    if (currentSoundIndex < soundFiles.length - 1) {
      setIsPlaying(false)
      setCurrentPosition(null)
      await soundObject.stopAsync()
      setCurrentSoundIndex(currentSoundIndex + 1)
    } else {
      setCurrentSoundIndex(0)
    }
  }

  const previousAudio = async () => {
    if (currentSoundIndex > 0) {
      setIsPlaying(false)
      setCurrentPosition(null)
      await soundObject.stopAsync()
      setCurrentSoundIndex(currentSoundIndex - 1)
    } else {
      setCurrentSoundIndex(soundFiles.length - 1)
    }
  }

  return {
    isPlaying,
    playAudio,
    pauseAudio,
    nextAudio,
    previousAudio,
    currentPosition,
    duration,
    soundFiles,
    currentSoundIndex,
  }
}

export default useAudioPlayer
