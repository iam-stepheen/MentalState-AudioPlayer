import React, { ReactElement } from 'react'
import { Ionicons } from '@expo/vector-icons'

import { TouchableOpacity, Text, View } from 'react-native'

const ControlButton: React.FC<{
  style?: string
  name: any
  onPress: () => void
}> = ({ onPress, name, style }) => (
  <TouchableOpacity onPress={onPress}>
    <View className={style}>
      <Ionicons name={name} size={32} color="white" />
    </View>
  </TouchableOpacity>
)

export default ControlButton
