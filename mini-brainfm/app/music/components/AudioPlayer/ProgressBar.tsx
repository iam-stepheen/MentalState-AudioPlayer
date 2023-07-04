import React from 'react'
import { View } from 'react-native'

const ProgressBar: React.FC<{
  currentPosition: number
  duration: number
}> = ({ currentPosition, duration }) => (
  <View className="h-1 bg-white">
    <View
      style={{
        height: '100%',
        width: `${((currentPosition || 0) / (duration || 1)) * 100}%`,
        backgroundColor: '#6156E2',
      }}
    />
  </View>
)

export default ProgressBar
