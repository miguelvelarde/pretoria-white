import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function MainScreen() {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Button
            title='Clientes'
            style={styles.btn}
            onPress={()=> navigation.navigate('stack-clients')}></Button>
        
        <Button
            title='Ventas'
            style={styles.btn}
            onPress={()=> navigation.navigate('stack-sales')}></Button>

        <Button
            title='Reportes'
            style={styles.btn}
            onPress={()=> navigation.navigate('stack-reports')}></Button>
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