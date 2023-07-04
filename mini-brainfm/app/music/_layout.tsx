import { Stack } from 'expo-router'

const LandingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0A071E',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="player"
        options={{
          headerShown: true,
          headerTintColor: 'white',
        }}
      />
    </Stack>
  )
}

export default LandingLayout
