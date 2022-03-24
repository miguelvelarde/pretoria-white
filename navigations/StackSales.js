import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Payment from './../screens/sales/Payment'
import SaleNew from './../screens/sales/SaleNew'
import SalesMain from './../screens/sales/SalesMain'

const Stack = createNativeStackNavigator()

export default function StackSales() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='sales-main'
        component={SalesMain}
        options={{title: 'Ventas'}}></Stack.Screen>

      <Stack.Screen
        name='new-sale'
        component={SaleNew}
        options={{title: 'Nueva venta'}}></Stack.Screen>
      
      <Stack.Screen
        name='new-payment'
        component={Payment}
        options={{title: 'Abono'}}></Stack.Screen>
    </Stack.Navigator>
  )
}