import React from 'react'
import { Image, Text, View } from 'react-native'
import ControlButton from './ControlButton'
import ProgressBar from './ProgressBar'
import { Ionicons } from '@expo/vector-icons'
import useAudioPlayer from '../../../../hooks/useAudioPlayer'
import DigitalTimeString from '../DigitalTimeString'

const AudioPlayer = ({ mentalState }) => {
  const {
    isPlaying,
    playAudio,
    pauseAudio,
    nextAudio,
    previousAudio,
    currentPosition,
    duration,
    soundFiles,
    currentSoundIndex,
  } = useAudioPlayer(mentalState)

  return (
    <View className="py-16 px-4 flex flex-col space-y-10">
      <View className="flex flex-col items-center space-y-6">
        <View>
          <Image
            style={{
              width: 300,
              height: 300,
            }}
            source={require('../../../../assets/images/musicImage.png')}
          />
        </View>

        <View className="flex flex-col items-center space-y-4">
          <Text className="text-white text-3xl">{mentalState}</Text>
          <Text className="text-[#8E8E8E] text-lg">
            {soundFiles.length > 0 && soundFiles[currentSoundIndex].songName}
          </Text>
        </View>
      </View>

      <View className="flex flex-col space-y-8">
        <View className="flex flex-col space-y-1">
          <View>
            <ProgressBar
              currentPosition={currentPosition || 0}
              duration={duration || 1}
            />
          </View>
          <View className="flex flex-row justify-between">
            <DigitalTimeString time={currentPosition} />
            <DigitalTimeString
              time={
                duration !== null ? duration - (currentPosition || 0) : null
              }
            />
          </View>
        </View>

        <View className="flex flex-row items-center justify-around">
          <View>
            <ControlButton
              name={'md-play-skip-back-sharp'}
              onPress={previousAudio}
            />
          </View>
          <View>
            <ControlButton
              style="bg-[#6156E2] w-16 h-16 rounded-full flex flex-row items-center justify-center"
              name={isPlaying ? 'pause' : 'play'}
              onPress={isPlaying ? pauseAudio : playAudio}
            />
          </View>

          <View>
            <ControlButton
              name={'play-skip-forward-sharp'}
              onPress={nextAudio}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default AudioPlayer
