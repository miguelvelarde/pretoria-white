import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ClientList() {
  
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>ClientList</Text>
      <Button
        title='Detalle cliente'
        style={styles.btn}
        onPress={()=> navigation.navigate('client-detail')}></Button>

    <Button
        title='Regresar'
        style={styles.btn}
        onPress={()=> navigation.goBack()}></Button>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ marginTop: 50},
  btn:{ margin: 10}
})