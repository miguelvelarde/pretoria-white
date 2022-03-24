import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StackClients from './StackClients'
import StackReports from './StackReports'
import StackSales from './StackSales'
import MainScreen from '../screens/main/MainScreen'

const Stack = createNativeStackNavigator()

export default function StackMain() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='main'
            component={MainScreen}
            options={{title:'Pantalla Principal'}}></Stack.Screen>
        
        <Stack.Screen
            name='stack-clients'
            component={StackClients}
            options={{headerShown: false}}></Stack.Screen>
        
        <Stack.Screen
            name='stack-reports'
            component={StackReports}
            options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen
            name='stack-sales'
            component={StackSales}
            options={{headerShown: false}}></Stack.Screen>

    </Stack.Navigator>
  )
}