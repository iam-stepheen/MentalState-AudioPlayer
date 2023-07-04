import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

const MusicList: React.FC<{
  mentalState: string
}> = ({ mentalState }) => {
  const router = useRouter()
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: '/music/player',
          params: {
            mentalState,
          },
        })
      }
    >
      <View className="flex flex-row items-center space-x-6">
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require('../../../assets/images/musicImage.png')}
          />
        </View>
        <View className="flex flex-col space-y-2">
          <Text className="text-white font-semibold text-md">
            {mentalState}
          </Text>
          {/* <Text className="text-white">Okunade Stephen</Text> */}
          <Text className="text-white">3 songs</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default MusicList
