import { Link } from 'expo-router'
import { View } from 'react-native'

export default function Home() {

  return (
    <View className="px-4 pt-16 bg-" >
      <Link href={"/_sitemap"} className="font-bold text-3xl mb-4">Sitemap</Link>
    </View>
  )
}
