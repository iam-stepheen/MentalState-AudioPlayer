import { FlatList, Pressable, Text, View } from 'react-native'
import SafeAreaViewApp from '../../components/UI/AppSafeArea'
import { useState } from 'react'

import { useRouter } from 'expo-router'
import MusicList from './components/musicList'

const mentalStates = ['Focus', 'Relax', 'Sleep']

const Landing = () => {
  const router = useRouter()
  return (
    <SafeAreaViewApp style="bg-[#0A071E] flex-1">
      <View className="px-4 py-8 flex flex-col space-y-4">
        <Text className="text-white font-semibold text-xl">
          Recommended for you
        </Text>
        <View className="fleex flex-col gap-6">
          <FlatList
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            data={mentalStates}
            renderItem={({ item }) => <MusicList mentalState={item} />}
          />
        </View>
      </View>
    </SafeAreaViewApp>
  )
}

export default Landing
