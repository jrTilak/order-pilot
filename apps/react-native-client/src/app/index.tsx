import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function Home() {

  return (
    <View className="px-4 pt-16">
      <Link href={"/login"} className="font-bold text-3xl mb-4">Jet Stack - Tilak </Link>
    </View>
  )
}
