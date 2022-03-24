import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function ClientList() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Button
        title='Detalle cliente'
        onPress={()=> navigation.navigate('client-detail')}
        style={styles.btn}></Button>

      <Button
        title='Regresar'
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
      marginTop: 50
  }
})