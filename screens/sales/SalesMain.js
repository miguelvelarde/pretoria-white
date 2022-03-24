import { StyleSheet, View, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

export default function SalesMain() {

    const navigation = useNavigation()

    return (
    <View style={styles.container}>
      <Button
        title='nueva venta'
        onPress={()=> navigation.navigate('new-sale')}
        style={styles.btn}></Button>

    <Button
        title='nuevo abono'
        onPress={()=> navigation.navigate('new-payment')}
        style={styles.btn}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      marginTop: 50
  },
  btn:{
      margin: 10
  }
})