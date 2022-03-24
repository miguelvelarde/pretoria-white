import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function ReportMain() {
  
    const navigation = useNavigation()

    return (
    <View style={styles.container}>
        <Button
        title='reporte mensual'
        onPress={()=> navigation.navigate('MonthlyReport')}
        style={styles.btn}></Button>
    
        <Button
        title='reporte por item'
        onPress={()=> navigation.navigate('ItemReport')}
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