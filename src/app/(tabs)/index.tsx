import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
          <Text className="text-5xl text-dark-200 font-bold">Welcome</Text>
          <Link href={"/onboarding"}>Onboarding</Link>
          {/* <Link href={"/movie/avengers"}>Avenger Movie</Link> */}
        </View>
  )
}

export default Home