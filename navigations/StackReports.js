import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ReportByMonth from './../screens/reports/ReportByMonth'
import ReportByItem from './../screens/reports/ReportByItem'
import ReportMain from '../screens/reports/ReportMain'

const Stack = createNativeStackNavigator()

export default function StackReports() {
  return (
  <Stack.Navigator>
    <Stack.Screen
      name='ReportMain'
      component={ReportMain}
      options={{title: 'Reportes'}}></Stack.Screen>

    <Stack.Screen
      name='MonthlyReport'
      component={ReportByMonth}
      options={{title: 'Por Mes'}}></Stack.Screen>
    
    <Stack.Screen
      name='ItemReport'
      component={ReportByItem}
      options={{title: 'Por Producto'}}></Stack.Screen>
  </Stack.Navigator>
  )
}