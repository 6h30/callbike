// import React, { useState } from 'react';
// import { ThemedText } from '@/components/ThemedText';
// import { View, StyleSheet, Button, ScrollView } from 'react-native';
// import { useRouter, useLocalSearchParams } from 'expo-router';
// import CarButton from '../carButton';

// const CarSelection: React.FC = () => {
//   const [selected, setSelected] = useState<'economy' | 'luxury' | 'family'>('economy');
//   const router = useRouter();
//   const { userName } = useLocalSearchParams<{ userName: string }>();

//   const handleSubmit = () => {
//     router.push({ pathname: '/ride', params: { selectedCarType: selected, userName } });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.upperSection}>
//         <ThemedText type="title" style={styles.title}>Chọn loại xe!</ThemedText>
        
//       </View>

//       <View style={styles.lowerSection}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <CarButton text="economy" active={selected === 'economy'} onPress={() => setSelected('economy')} />
//           <CarButton text="luxury" active={selected === 'luxury'} onPress={() => setSelected('luxury')} />
//           <CarButton text="family" active={selected === 'family'} onPress={() => setSelected('family')} />
//         </ScrollView>
//       </View>

//       <View style={styles.submitButton}>
//         <Button title="Chọn xe" onPress={handleSubmit} />
//       </View>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//     backgroundColor: '#F5F5F5',
//   },
//   upperSection: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   lowerSection: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
    
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   submitButton: {
//     // width: '100%',
//     alignItems: 'center',
//   },
// });

// export default CarSelection;


// import React, { useState } from 'react';
// import { ThemedText } from '@/components/ThemedText';
// import { View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
// import { useRouter, useLocalSearchParams } from 'expo-router';
// import { useDispatch } from 'react-redux'; // Import useDispatch
// import CarButton from '../carButton';
// import { setSelectedCarType } from '../redux/carSlice'; // Import action creator

// const CarSelection: React.FC = () => {
//   const [selected, setSelected] = useState<'economy' | 'luxury' | 'family'>('economy');
//   const router = useRouter();
//   const { userName } = useLocalSearchParams<{ userName: string }>();
//   const dispatch = useDispatch(); // Initialize useDispatch

//   const handleSubmit = () => {
//     // Dispatch action to update selected car type in Redux store
//     dispatch(setSelectedCarType(selected));
    
//     // router.push({ pathname: '/ride', params: { selectedCarType: selected, userName } });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.upperSection}>
//         <ThemedText type="title" style={styles.title}>Chọn loại xe!</ThemedText>       
//       </View>

//       <View style={styles.lowerSection}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         <TouchableOpacity onPress={handleSubmit}>
//           <CarButton text="economy" active={selected === 'economy'} onPress={() => setSelected('economy')} />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={handleSubmit}>
//           <CarButton text="luxury" active={selected === 'luxury'} onPress={() => setSelected('luxury')} />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={handleSubmit}>
//           <CarButton text="family" active={selected === 'family'} onPress={() => setSelected('family')} />
//           </TouchableOpacity>

//         </ScrollView>
//       </View>

//       {/* <View style={styles.submitButton}>
//         <Button title="Chọn xe" onPress={handleSubmit} />
//       </View> */}
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//     backgroundColor: '#F5F5F5',
//   },
//   upperSection: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   lowerSection: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
    
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   submitButton: {
//     // width: '100%',
//     alignItems: 'center',
//   },
// });

// export default CarSelection;


import React, { useState, useEffect } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import CarButton from '../carButton';
import { setSelectedCarType } from '../redux/carSlice'; 

const CarSelection: React.FC = () => {
  const [selected, setSelected] = useState<'economy' | 'luxury' | 'family'>('economy');
  const dispatch = useDispatch();

  //chon mac dinh là economy len redux
  useEffect(() => {
    dispatch(setSelectedCarType('economy'));
  }, [dispatch]);

  const handleCarSelect = (carType: 'economy' | 'luxury' | 'family') => {
    setSelected(carType);
    dispatch(setSelectedCarType(carType));
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <ThemedText type="title" style={styles.title}>Chọn loại xe!</ThemedText>
      </View>

      <View style={styles.lowerSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CarButton text="economy" active={selected === 'economy'} onPress={() => handleCarSelect('economy')} />
          <CarButton text="luxury" active={selected === 'luxury'} onPress={() => handleCarSelect('luxury')} />
          <CarButton text="family" active={selected === 'family'} onPress={() => handleCarSelect('family')} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  upperSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  lowerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CarSelection;

