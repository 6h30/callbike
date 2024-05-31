import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TaxiTypeRow from './TaxiTypeRow' 
import types from '../../assets/data/types'
import { StyleSheet } from 'react-native'

const TaxiTypes = () => {
  // Function to handle confirmation
  const confirm = () => {
    console.log('Confirmed Uber') // Logging confirmation message to the console
  }

  return (
    <View>
      {/* Mapping over the types array to render TaxiTypeRow for each type */}
      {types.map(type => (
        <TaxiTypeRow type={type} key={type.id} /> // Assuming each type has a unique id
      ))}

      {/* Button to confirm selection */}
      <TouchableOpacity onPress={confirm} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Uber</Text>
      </TouchableOpacity>
    </View>
  )
}

// Styles for the button
const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: 'black', // Background color of the button
    padding: 10, // Padding around the button content
    margin: 10, // Margin around the button
    alignItems: 'center', // Aligning button content to center
  },
  confirmButtonText: {
    color: 'white', // Text color of the button
    fontWeight: 'bold', // Bold font weight for the text
  },
})

export default TaxiTypes // Exporting the component
