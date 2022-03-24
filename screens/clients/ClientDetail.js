import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function ClientDetail({navigation}) {
  
  return (
    <View style={styles.container}>
      <Button
        title='regresar'
        style={styles.btn}
        onPress={()=> navigation.goBack()}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      marginTop: 50
  },
  btn:{
      marginTop: 50
  }
})