import { View, Image, Text } from 'react-native'
import React from 'react'
// import styles from './styles'
import { StyleSheet } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'

const TaxiTypeRow = (props) => {

  const {type} = props;

  const getImageName = () => {
    if (type.type === 'TaxiX') {
      return require('../../assets/images/react-logo.png')
    }
    if (type.type === 'Taxi+') {
      return require('../../assets/images/react-logo.png')
    }
    if (type.type === 'TaxiXL') {
      return require('../../assets/images/react-logo.png')
    }
  }

  return (
    <View style={styles.container}>

      {/* Image */}
      <Image style={styles.image} source={getImageName()} />

      {/* Type name/ desc */}
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name='person' size={16} />
          3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      {/* Price */}
      <View style={styles.rightContainer}>
        <Ionicons name='pricetag' size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
  },
  image: {
      height: 70,
      width: 80,
      resizeMode: "contain"
  },
  middleContainer: {
      flex: 1,
      marginHorizontal: 10,
  },
  type: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5
  },  
  time: {
      color: '#5d5d5d'
  },
  rightContainer: {
      width: 100,
      justifyContent: 'flex-end',
      flexDirection: 'row'
  },
  price: {
      fontWeight: 'bold',
      fontsize: 18,
      marginLeft: 5
  },
})

export default TaxiTypeRow