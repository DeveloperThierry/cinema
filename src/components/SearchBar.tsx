import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface Props {
    placeholder:string,
    onPress?: () => void
}
const SearchBar = ({placeholder, onPress}:Props) => {
  return (
    <View className="flex-row items-center bgdark-200 rounded-full px-5 py-4">
      <Ionicons name="search" size={24}/>
      <TextInput onPress={onPress} placeholder={placeholder} value={""} onChangeText={() => {}}/>
    </View>
  )
}

export default SearchBar