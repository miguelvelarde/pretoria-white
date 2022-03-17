import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from './../screens/main/MainScreen'
import StackClients from './StackClients'
import StackReports from './StackReports'
import StackSales from './StackSales'

const Stack = createNativeStackNavigator()

export default function StackMain() {
  return (
        <Stack.Navigator initialRouteName='main'>
            <Stack.Screen
                name='main'
                component={MainScreen}
                options={{title: 'Main Screen'}}></Stack.Screen>

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