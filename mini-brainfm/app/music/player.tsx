import { Text, View } from 'react-native'
import SafeAreaViewApp from '../../components/UI/AppSafeArea'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'
import AudioPlayer from './components/AudioPlayer'

const Player = () => {
  const navigation = useNavigation()
  const { mentalState } = useLocalSearchParams()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mentalState,
    })
  }, [])

  return (
    <SafeAreaViewApp style="bg-[#0A071E] flex-1">
      <View>
        <AudioPlayer mentalState={mentalState} />
      </View>
    </SafeAreaViewApp>
  )
}

export default Player
