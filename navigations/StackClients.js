import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ClientList from './../screens/clients/ClientList'
import ClientDetail from '../screens/clients/ClientDetail'

const Stack = createNativeStackNavigator()

export default function StackClients() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='client-list'
        component={ClientList}
        options={{title:'Lista de clientes'}}></Stack.Screen>

    <Stack.Screen
        name='client-detail'
        component={ClientDetail}
        options={{title: 'Cliente Detalle'}}></Stack.Screen>
    </Stack.Navigator>
  )
}

