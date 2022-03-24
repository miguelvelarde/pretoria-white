import { StyleSheet, View, Button } from 'react-native'
import React from 'react'

export default function Payment({navigation}) {
  return (
    <View style={styles.container}>
      
      <Button
        title='regresar'
        onPress={()=> navigation.goBack()}
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