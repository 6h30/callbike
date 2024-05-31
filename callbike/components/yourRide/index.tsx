import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type RidePageProps = {
  selectedCarType: 'economy' | 'luxury' | 'family'; 
  userName?: string;
};

const RidePage: React.FC<RidePageProps> = ({ selectedCarType, userName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your ride, {userName || 'Passenger'}!</Text>
      <Text style={styles.subtitle}>Selected Car Type: {selectedCarType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default RidePage;
