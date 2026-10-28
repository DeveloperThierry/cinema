import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"
const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarItemStyle:{
      paddingVertical:10, 
    }, tabBarShowLabel:false, tabBarStyle:{backgroundColor:"#e0dfd5", borderRadius:20, position:"absolute", height:60, marginBottom:60, flexDirection:"row", justifyContent:"center", alignItems:"center", paddingTop:10}}}>
        <Tabs.Screen name="index" options={{title:"Home", headerShown:false, tabBarIcon:({focused}) => (<Ionicons name={focused ? "home" : "home-outline"} size={24} color={""}/>)}} />
        <Tabs.Screen name="search" options={{title:"Search", headerShown:false, tabBarIcon:({focused}) => (<Ionicons name={focused ? "search" : "search-outline"} size={24} color={""}/>)}} />
        <Tabs.Screen name="saved" options={{title:"Saved", headerShown:false, tabBarIcon:({focused}) => (<Ionicons name={focused ? "bookmark" : "bookmark-outline"} size={24} color={""}/>)}}/>
        <Tabs.Screen name="profile" options={{title:"Profile", headerShown:false, tabBarIcon:({focused}) => (<Ionicons name={focused ? "people" : "people-outline"} size={24} color={""}/>)}}/>
    </Tabs>
  )
}

export default TabLayout