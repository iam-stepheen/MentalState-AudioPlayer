import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { ReactElement } from 'react'
import { useRouter } from 'expo-router'
import StatusBarLight from './StatusBarLight'

const SafeAreaViewApp: React.FC<{
  children: ReactElement
  style: string
}> = ({ children, style }) => {
  return (
    <SafeAreaView className={style}>
      <StatusBarLight />
      <View>{children}</View>
    </SafeAreaView>
  )
}

export default SafeAreaViewApp
