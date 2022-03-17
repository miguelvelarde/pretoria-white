import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClientDetail from './../screens/clients/ClientDetail'
import ClientList from './../screens/clients/ClientList'

const Stack = createNativeStackNavigator()

export default function StackClients() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='client-list'
        component={ClientList}></Stack.Screen>
      <Stack.Screen
        name='client-detail'
        component={ClientDetail}></Stack.Screen>
    </Stack.Navigator>
  )
}